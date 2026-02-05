import React from "react";

export function StorageModal({ open, onClose, storageInfo, getStorageCleanupSuggestions }) {
  if (!open) return null;

  const suggestions = getStorageCleanupSuggestions();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container storage-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>📊 Storage Management</h3>
          <button type="button" onClick={onClose} className="modal-close" aria-label="Close">
            ×
          </button>
        </div>
        <div className="storage-details">
          <div className="storage-stats">
            <div className="stat">
              <span className="label">Used:</span>
              <span className="value">{storageInfo.used.toFixed(1)}MB</span>
            </div>
            <div className="stat">
              <span className="label">Total:</span>
              <span className="value">{storageInfo.total}MB</span>
            </div>
            <div className="stat">
              <span className="label">Files:</span>
              <span className="value">{storageInfo.filesSize.toFixed(1)}MB</span>
            </div>
            <div className="stat">
              <span className="label">Submissions:</span>
              <span className="value">{storageInfo.submissions}</span>
            </div>
          </div>
          <div className="cleanup-suggestions">
            <h4>💡 Cleanup Suggestions</h4>
            {suggestions.map((suggestion, index) => (
              <div key={index} className={`suggestion ${suggestion.risk}`}>
                <div className="suggestion-header">
                  <span className="title">{suggestion.title}</span>
                  <span className="savings">Save {suggestion.savings}</span>
                </div>
                <p className="description">{suggestion.description}</p>
                <span className={`risk-badge ${suggestion.risk}`}>{suggestion.risk.toUpperCase()} RISK</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
