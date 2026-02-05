import React from "react";

export function ExportModal({
  open,
  onClose,
  exportOptions,
  setExportOptions,
  onExport,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container export-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>📤 Export Data</h3>
          <button type="button" onClick={onClose} className="modal-close" aria-label="Close">
            ×
          </button>
        </div>
        <div className="export-options">
          <div className="option-group">
            <label>Format:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="json"
                  checked={exportOptions.format === "json"}
                  onChange={(e) => setExportOptions((prev) => ({ ...prev, format: e.target.value }))}
                />
                JSON
              </label>
              <label>
                <input
                  type="radio"
                  value="csv"
                  checked={exportOptions.format === "csv"}
                  onChange={(e) => setExportOptions((prev) => ({ ...prev, format: e.target.value }))}
                />
                CSV
              </label>
            </div>
          </div>
          <div className="option-group">
            <label>Include File Attachments:</label>
            <input
              type="checkbox"
              checked={exportOptions.includeFiles}
              onChange={(e) => setExportOptions((prev) => ({ ...prev, includeFiles: e.target.checked }))}
            />
          </div>
          <div className="option-group">
            <label>Date Range:</label>
            <select
              value={exportOptions.dateRange}
              onChange={(e) => setExportOptions((prev) => ({ ...prev, dateRange: e.target.value }))}
            >
              <option value="all">All Time</option>
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="last90days">Last 90 Days</option>
            </select>
          </div>
          <div className="option-group">
            <label>Submission Types:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={exportOptions.submissionTypes.includes("enquiry")}
                  onChange={(e) => {
                    const types = e.target.checked
                      ? [...exportOptions.submissionTypes, "enquiry"]
                      : exportOptions.submissionTypes.filter((t) => t !== "enquiry");
                    setExportOptions((prev) => ({ ...prev, submissionTypes: types }));
                  }}
                />
                Enquiries
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={exportOptions.submissionTypes.includes("quote")}
                  onChange={(e) => {
                    const types = e.target.checked
                      ? [...exportOptions.submissionTypes, "quote"]
                      : exportOptions.submissionTypes.filter((t) => t !== "quote");
                    setExportOptions((prev) => ({ ...prev, submissionTypes: types }));
                  }}
                />
                Quotes
              </label>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="button" onClick={onExport} className="btn btn-primary">
              📤 Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
