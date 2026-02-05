import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { sendAdminNotification } from "../utils/whatsappService";
import { trackFormSubmission, trackQuoteRequest } from "../utils/analytics";
import "./GetAQuote.css";
import AOS from "aos";
import "aos/dist/aos.css";
import OnlineQuoteBG from "../assets/about/entertainment-technology-installation.WEBP";
import OnlineQuoteFormBG from "../assets/nzxtgen-free-quote-background.webp";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
    buildingType: "",
    otherSpec: "",
    roofType: "",
  });

  const [selectedWallTypes, setSelectedWallTypes] = useState([]);
  const [selectedCeilingTypes, setSelectedCeilingTypes] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e, setState, currentState) => {
    const { value, checked } = e.target;
    if (checked) {
      setState([...currentState, value]);
    } else {
      setState(currentState.filter(item => item !== value));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];
    const maxFileSize = 10 * 1024 * 1024; // 10MB limit per file
    const maxFiles = 10;
    let hasInvalidFiles = false;
    let hasFileLimitExceeded = false;

    const totalFilesAfterAdding = selectedFiles.length + files.length;
    if (totalFilesAfterAdding > maxFiles) {
      hasFileLimitExceeded = true;
      const remainingSlots = maxFiles - selectedFiles.length;
      files.splice(remainingSlots);
    }

    files.forEach(file => {
      if (file.size <= maxFileSize && validFiles.length + selectedFiles.length < maxFiles) {
        validFiles.push(file);
      } else if (file.size > maxFileSize) {
        hasInvalidFiles = true;
      }
    });

    if (hasFileLimitExceeded) {
      alert(`Maximum ${maxFiles} files allowed. Only the first ${maxFiles - selectedFiles.length} files were added.`);
    }
    if (hasInvalidFiles) {
      alert("Some files exceed the 10MB limit and were not added.");
    }

    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    e.target.value = "";
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles(prevFiles =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const clearAllFiles = () => {
    setSelectedFiles([]);
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const calculateEstimatedSize = (filesData) => {
    let totalSize = 0;
    filesData.forEach(file => {
      totalSize += file.size * 1.33;
    });
    return totalSize;
  };

  const saveToFirebase = async (completeFormData, filesData = []) => {
    try {
      const submissionData = {
        ...completeFormData,
        timestamp: new Date(),
        status: "unread",
        source: "Quote Form",
        type: "quote"
      };

      if (filesData.length > 0) {
        const estimatedSize = calculateEstimatedSize(filesData);
        const maxDocumentSize = 800 * 1024;

        if (estimatedSize > maxDocumentSize) {
          submissionData.attachments = filesData.map(fileData => ({
            fileName: fileData.name,
            fileType: fileData.type,
            fileSize: fileData.size,
            status: "large_file_detected"
          }));
          submissionData.hasLargeFiles = true;
          submissionData.totalFileSize = estimatedSize;
        } else {
          submissionData.attachments = filesData.map(fileData => ({
            fileName: fileData.name,
            fileType: fileData.type,
            fileSize: fileData.size,
            fileData: fileData.base64
          }));
        }
      }

      await addDoc(collection(db, "quote_submissions"), submissionData);
      return submissionData;
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("Submitting quote request...");

    try {
      if (selectedFiles.length > 10) {
        setSubmitStatus("❌ Maximum 10 files allowed. Please remove some files and try again.");
        setIsSubmitting(false);
        return;
      }

      const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
      const maxTotalSize = 50 * 1024 * 1024;

      if (totalSize > maxTotalSize) {
        setSubmitStatus("❌ Total file size exceeds 50MB limit. Please reduce file sizes or remove some files.");
        setIsSubmitting(false);
        return;
      }

      const completeFormData = {
        ...formData,
        wallTypes: selectedWallTypes.join(', '),
        ceilingTypes: selectedCeilingTypes.join(', '),
        additionalInfo: selectedExtras.join(', ')
      };

      let filesData = [];

      if (selectedFiles.length > 0) {
        setSubmitStatus(`Processing ${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''}...`);

        for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i];
          const base64 = await fileToBase64(file);
          filesData.push({
            name: file.name,
            type: file.type,
            size: file.size,
            base64: base64
          });
        }
      }

      setSubmitStatus("Saving quote request...");
      const savedData = await saveToFirebase(completeFormData, filesData);

      setSubmitStatus("Sending notifications...");
      setTimeout(() => {
        sendAdminNotification(completeFormData, 'quote', selectedFiles.length);
      }, 1000);

      let successMessage = "✅ Quote request submitted successfully! Admin has been notified via WhatsApp with complete details.";
      if (savedData.hasLargeFiles) {
        successMessage += " Note: Some large files were processed separately for optimal performance.";
      }
      setSubmitStatus(successMessage);

      trackFormSubmission('quote', 'free_quote_form');
      trackQuoteRequest('free_quote_page');

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        buildingType: "",
        otherSpec: "",
        roofType: "",
      });
      setSelectedWallTypes([]);
      setSelectedCeilingTypes([]);
      setSelectedExtras([]);
      setSelectedFiles([]);

      const fileInput = document.getElementById('fileUpload');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      setSubmitStatus("❌ Error submitting quote request. Please try again.");
      console.error("Error:", error);
    }

    setIsSubmitting(false);
  };

  const getTotalFileSize = () => {
    return selectedFiles.reduce((total, file) => total + file.size, 0);
  };

  const formatFileSize = (bytes) => {
    return (bytes / 1024 / 1024).toFixed(2);
  };

  const getFileCountStatus = () => {
    const count = selectedFiles.length;
    const maxFiles = 10;
    if (count === 0) return "";
    if (count >= maxFiles) return " (Maximum reached)";
    return ` (${maxFiles - count} more allowed)`;
  };

  return (
    <section
      className="quote-section1"
      style={{ backgroundImage: `url(${OnlineQuoteBG})` }}
    >
      <div
        className="quote-container1"
        data-aos="fade-up"
        style={{ backgroundImage: `url(${OnlineQuoteFormBG})` }}
      >
        <div className="overlay border-radius"></div>

        {submitStatus && (
          <div
            style={{
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "5px",
              backgroundColor: submitStatus.includes("✅") ? "#d4edda" : "#f8d7da",
              color: submitStatus.includes("✅") ? "#155724" : "#721c24",
              border: submitStatus.includes("✅") ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
              position: "relative",
              zIndex: 10
            }}
          >
            {submitStatus}
          </div>
        )}

        <form className="quote-form1" onSubmit={handleFormSubmit}>
          <h1 className="quote-header1">Get A Free Online Quote</h1>

          <div className="form-row1">
            <div className="name">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                required
                onChange={handleChange}
              />
            </div>
            <div className="name">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Description of Work*</label>
            <textarea
              name="description"
              value={formData.description}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Building Type*</label>
            <select
              name="buildingType"
              value={formData.buildingType}
              required
              onChange={handleChange}
            >
              <option value="">Choose one</option>
              <option value="Apartment (Under 4 Levels)">Apartment (Under 4 Levels)</option>
              <option value="Apartment (Over 5 Levels)">Apartment (Over 5 Levels)</option>
              <option value="Single Story">Single Story</option>
              <option value="Double Story">Double Story</option>
              <option value="Town House (Single Story)">Town House (Single Story)</option>
              <option value="Town House (Double Story)">Town House (Double Story)</option>
              <option value="Other">Other</option>
              <option value="Granny Flat">Granny Flat</option>
            </select>
          </div>

          <div className="form-row">
            <label>If other, please specify:</label>
            <input
              type="text"
              name="otherSpec"
              value={formData.otherSpec}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Which type suits your walls? (Select one or more)</label>
            <div className="checkbox-group">
              {['Dry Wall', 'Rendered Wall', 'Brick Wall', 'Fibro Wall', 'Timber'].map((wallType) => (
                <label key={wallType}>
                  <input
                    type="checkbox"
                    value={wallType}
                    checked={selectedWallTypes.includes(wallType)}
                    onChange={(e) => handleCheckboxChange(e, setSelectedWallTypes, selectedWallTypes)}
                  />
                  {wallType}
                </label>
              ))}
            </div>
            {selectedWallTypes.length > 0 && (
              <div style={{ marginTop: "8px", fontSize: "14px", color: "#28a745" }}>
                Selected: {selectedWallTypes.join(', ')}
              </div>
            )}
          </div>

          <div className="form-row">
            <label>Ceiling Type (Select one or more)</label>
            <div className="checkbox-group">
              {['Concrete', 'Gyprock/Drywall', 'Fibro/Cement sheet', 'Timber', 'Suspended/False ceiling'].map((ceilingType) => (
                <label key={ceilingType}>
                  <input
                    type="checkbox"
                    value={ceilingType}
                    checked={selectedCeilingTypes.includes(ceilingType)}
                    onChange={(e) => handleCheckboxChange(e, setSelectedCeilingTypes, selectedCeilingTypes)}
                  />
                  {ceilingType}
                </label>
              ))}
            </div>
            {selectedCeilingTypes.length > 0 && (
              <div style={{ marginTop: "8px", fontSize: "14px", color: "#28a745" }}>
                Selected: {selectedCeilingTypes.join(', ')}
              </div>
            )}
          </div>

          <div className="form-row">
            <label>Roof Type*</label>
            <select
              name="roofType"
              value={formData.roofType}
              required
              onChange={handleChange}
            >
              <option value="">Choose one</option>
              <option value="Flat with roof tiles">Flat with roof tiles</option>
              <option value="Flat with tin/metal sheets">Flat with tin/metal sheets</option>
              <option value="Pitched with roof tiles">Pitched with roof tiles</option>
              <option value="Pitched with tin/metal sheets">Pitched with tin/metal sheets</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <label>Additional Info (Select one or more):</label>
            <div className="checkbox-group">
              {['Roof access available', 'Underground access available', 'Apartment not on highest level', 'Multi-level commercial complex'].map((extra) => (
                <label key={extra}>
                  <input
                    type="checkbox"
                    value={extra}
                    checked={selectedExtras.includes(extra)}
                    onChange={(e) => handleCheckboxChange(e, setSelectedExtras, selectedExtras)}
                  />
                  {extra}
                </label>
              ))}
            </div>
            {selectedExtras.length > 0 && (
              <div style={{ marginTop: "8px", fontSize: "14px", color: "#28a745" }}>
                Selected: {selectedExtras.join(', ')}
              </div>
            )}
          </div>

          <div className="form-row">
            <p className="note-text">
              To provide you with a more accurate quote, please feel free to include any photos you have.
            </p>
          </div>

          <div className="form-row">
            <input
              type="file"
              name="attachment"
              id="fileUpload"
              accept="image/jpeg,image/jpg,image/png,image/gif,.pdf,.doc,.docx"
              onChange={handleFileChange}
              multiple
              disabled={selectedFiles.length >= 10}
            />
            <label
              htmlFor="fileUpload"
              className="file-upload-btn"
              style={{
                opacity: selectedFiles.length >= 10 ? 0.6 : 1,
                cursor: selectedFiles.length >= 10 ? "not-allowed" : "pointer"
              }}
            >
              {selectedFiles.length >= 10
                ? "Maximum files reached (10/10)"
                : selectedFiles.length > 0
                  ? `+ Add More Files (${selectedFiles.length}/10 selected)${getFileCountStatus()}`
                  : "+ Upload Files (Max 10MB each, 10 files max)"
              }
            </label>

            {getTotalFileSize() > 0 && (
              <div style={{ marginTop: "8px", fontSize: "12px", color: getTotalFileSize() > 50 * 1024 * 1024 ? "#dc3545" : "#6c757d" }}>
                Total size: {formatFileSize(getTotalFileSize())} MB / 50 MB limit
              </div>
            )}

            {selectedFiles.length > 0 && (
              <div style={{ marginTop: "15px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px"
                }}>
                  <span style={{ color: "#28a745", fontSize: "14px", fontWeight: "bold" }}>
                    📎 {selectedFiles.length}/10 files selected
                    ({formatFileSize(getTotalFileSize())} MB total)
                  </span>
                  <button
                    type="button"
                    onClick={clearAllFiles}
                    style={{
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "3px",
                      fontSize: "12px",
                      cursor: "pointer"
                    }}
                  >
                    Clear All
                  </button>
                </div>

                <div style={{
                  maxHeight: "150px",
                  overflowY: "auto",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  backgroundColor: "#f9f9f9"
                }}>
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px 0",
                        borderBottom: index < selectedFiles.length - 1 ? "1px solid #eee" : "none"
                      }}
                    >
                      <span style={{ fontSize: "13px", color: "#333" }}>
                        {file.name} ({formatFileSize(file.size)} MB)
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        style={{
                          background: "#6c757d",
                          color: "white",
                          border: "none",
                          padding: "2px 6px",
                          borderRadius: "3px",
                          fontSize: "11px",
                          cursor: "pointer"
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="form-row">
            <p className="note-text">
              Thank you for reaching out. We may be experiencing a high volume of work, and it may take some time for us to respond.
            </p>
          </div>

          <div className="form-row">
            <button
              type="submit"
              className="request-quote-btn"
              disabled={isSubmitting || getTotalFileSize() > 50 * 1024 * 1024}
              style={{
                opacity: (isSubmitting || getTotalFileSize() > 50 * 1024 * 1024) ? 0.6 : 1,
                cursor: (isSubmitting || getTotalFileSize() > 50 * 1024 * 1024) ? "not-allowed" : "pointer"
              }}
            >
              {isSubmitting ? "Submitting..." : "Request a Quote"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetAQuote;
