import React from "react";

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  overflowY: "auto",
};

const modalContentStyle = {
  background: "#fff",
  padding: "32px 24px",
  borderRadius: "12px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
  maxWidth: "600px",
  width: "90vw",
  position: "relative",
  maxHeight: "90vh",
  overflowY: "auto",
};

const closeBtnStyle = {
  position: "absolute",
  top: "16px",
  right: "16px",
  background: "none",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: "#333",
};

const rowWrapperStyle = { display: "flex", flexDirection: "column", width: "100%", gap: "8px" };
const fieldRowStyle = { alignItems: "center", marginBottom: 8 };
const bulletStyle = { width: 10, height: 9, backgroundColor: "black", borderRadius: 9999 };
const removeBtnStyle = { marginTop: "0px", padding: "4px 8px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: 4, height: "40px", width: "fit-content" };
const addBtnStyle = { marginTop: "0px", padding: "4px 8px", backgroundColor: "#218838", color: "white", border: "none", borderRadius: 4, height: "40px", width: "75px" };
const imgPreviewStyle = { width: "100%", maxHeight: 120, objectFit: "cover", marginBottom: 8, borderRadius: 6 };

export function ProductFormModal({
  open,
  onClose,
  newItem,
  handleFormChange,
  handleArrayChange,
  handleAddField,
  handleRemoveField,
  openCloudinaryWidget,
  handleFormSubmit,
  loading,
  imgReady,
  isEditing,
}) {
  if (!open) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <button type="button" onClick={onClose} style={closeBtnStyle} aria-label="Close">
          ×
        </button>
        <h2 style={{ color: "black" }}>{isEditing ? "Edit Product" : "Add New Product"}</h2>
        <p className="subtext" style={{ color: "black", opacity: 0.8 }}>
          Enter product details to create a new entry
        </p>
        <form className="create-form" onSubmit={handleFormSubmit}>
          <div className="form-group-row">
            <div className="form-group-row-inner">
              <label htmlFor="name" style={{ textAlign: "start" }}>
                Product Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newItem.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="form-group-row-inner">
              <label htmlFor="price" style={{ textAlign: "start" }}>
                Price <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleFormChange}
                required
                step="0.01"
              />
            </div>
          </div>
          <div style={rowWrapperStyle}>
            <label style={{ textAlign: "start" }}>Package Includes <span style={{ color: "red" }}>*</span></label>
            {newItem.packageIncludes.map((val, idx) => (
              <div className="form-group-row-wrapper" style={fieldRowStyle} key={idx}>
                <span style={bulletStyle} />
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleArrayChange("packageIncludes", idx, e.target.value)}
                  placeholder={`Include #${idx + 1}`}
                  required
                  style={{ flex: 1 }}
                />
                {newItem.packageIncludes.length > 1 && idx !== newItem.packageIncludes.length - 1 && (
                  <button type="button" onClick={() => handleRemoveField("packageIncludes", idx)} style={removeBtnStyle}>Remove</button>
                )}
                {idx === newItem.packageIncludes.length - 1 && (
                  <button type="button" onClick={() => handleAddField("packageIncludes")} style={addBtnStyle}>Add</button>
                )}
              </div>
            ))}
          </div>
          <div style={rowWrapperStyle}>
            <label style={{ textAlign: "start" }}>Features <span style={{ color: "red" }}>*</span></label>
            {newItem.features.map((val, idx) => (
              <div className="form-group-row-wrapper" style={fieldRowStyle} key={idx}>
                <span style={bulletStyle} />
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleArrayChange("features", idx, e.target.value)}
                  placeholder={`Feature #${idx + 1}`}
                  required
                  style={{ flex: 1 }}
                />
                {newItem.features.length > 1 && idx !== newItem.features.length - 1 && (
                  <button type="button" onClick={() => handleRemoveField("features", idx)} style={removeBtnStyle}>Remove</button>
                )}
                {idx === newItem.features.length - 1 && (
                  <button type="button" onClick={() => handleAddField("features")} style={addBtnStyle}>Add</button>
                )}
              </div>
            ))}
          </div>
          <button type="button" className="image-upload-btn" onClick={openCloudinaryWidget}>
            Upload Image
          </button>
          {newItem.img && <img src={newItem.img} alt="Preview" style={imgPreviewStyle} />}
          <div style={{ display: "flex", gap: "10px", width: "100%" }}>
            <button type="button" onClick={onClose} style={{ width: "50%" }}>Close</button>
            <button type="submit" disabled={loading || !imgReady} style={{ width: "50%" }}>
              {loading ? (isEditing ? "Updating..." : "Creating...") : isEditing ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
