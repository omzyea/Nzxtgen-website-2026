import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { sendAdminNotification } from "../utils/whatsappService";
import { trackFormSubmission } from "../utils/analytics";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const saveToFirebase = async (formData, filesData = []) => {
    try {
      const submissionData = {
        ...formData,
        timestamp: new Date(),
        status: "unread",
        source: "Enquiry Form",
        type: "enquiry"
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

      await addDoc(collection(db, "enquiry_submissions"), submissionData);
      return submissionData;
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("Submitting enquiry...");

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

      setSubmitStatus("Saving enquiry...");
      await saveToFirebase(formData, filesData);

      setSubmitStatus("Sending notifications...");
      setTimeout(() => {
        sendAdminNotification(formData, 'enquiry', selectedFiles.length);
      }, 1000);

      trackFormSubmission('enquiry', 'enquiry_form');

      navigate("/thank-you?form=enquiry", {
        state: {
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' '),
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        }
      });

    } catch (error) {
      setSubmitStatus("❌ Error submitting enquiry. Please try again.");
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
    <div className="enquiry-section">
      <div className="enquiry-card">
        <h2>
          Enquire Now & Save <span>$50 Off</span> Your Electrical, Security & Tech needs!
        </h2>

        {submitStatus && (
          <div
            style={{
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "5px",
              backgroundColor: submitStatus.includes("✅") ? "#d4edda" : "#f8d7da",
              color: submitStatus.includes("✅") ? "#155724" : "#721c24",
              border: submitStatus.includes("✅") ? "1px solid #c3e6cb" : "1px solid #f5c6cb"
            }}
          >
            {submitStatus}
          </div>
        )}

        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="How Can We Help You?"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className="file-upload">
            <input
              type="file"
              name="attachment"
              id="fileUpload"
              accept="image/jpeg,image/jpg,image/png,image/gif,.pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
              multiple
              disabled={selectedFiles.length >= 10}
            />
            <label
              htmlFor="fileUpload"
              style={{
                opacity: selectedFiles.length >= 10 ? 0.6 : 1,
                cursor: selectedFiles.length >= 10 ? "not-allowed" : "pointer"
              }}
            >
              {selectedFiles.length >= 10
                ? "Maximum files reached (10/10)"
                : selectedFiles.length > 0
                  ? `Add More Files (${selectedFiles.length}/10 selected)${getFileCountStatus()}`
                  : "Upload Files (Images, PDF, DOC)"
              }
            </label>
            <span>Max file size: 10MB per file, 10 files max, 50MB total</span>

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

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting || getTotalFileSize() > 50 * 1024 * 1024}
            style={{
              opacity: (isSubmitting || getTotalFileSize() > 50 * 1024 * 1024) ? 0.6 : 1,
              cursor: (isSubmitting || getTotalFileSize() > 50 * 1024 * 1024) ? "not-allowed" : "pointer"
            }}
          >
            {isSubmitting ? "Submitting..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
