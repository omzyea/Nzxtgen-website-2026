import React from "react";
import {
  formatDate,
  getWhatsAppLink,
  getEmailLink,
  hasAttachments,
  getAttachmentCount,
  downloadAttachment,
} from "../../utils/submissionUtils";

export function SubmissionDetailModal({
  open,
  submission,
  onClose,
  onDelete,
}) {
  if (!open || !submission) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container submission-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{submission.type === "enquiry" ? "📝 Enquiry" : "💰 Quote"} Submission</h3>
          <button type="button" onClick={onClose} className="modal-close" aria-label="Close">
            ×
          </button>
        </div>
        <div className="submission-details">
          <div className="detail-section">
            <h4>👤 Personal Information</h4>
            <div className="detail-grid">
              {submission.type === "enquiry" ? (
                <>
                  <div className="detail-item"><span className="label">Name:</span><span className="value">{submission.name}</span></div>
                  <div className="detail-item"><span className="label">Email:</span><span className="value">{submission.email}</span></div>
                  <div className="detail-item"><span className="label">Phone:</span><span className="value">{submission.phone || "Not provided"}</span></div>
                  <div className="detail-item"><span className="label">Address:</span><span className="value">{submission.address || "Not provided"}</span></div>
                </>
              ) : (
                <>
                  <div className="detail-item"><span className="label">Name:</span><span className="value">{submission.firstName} {submission.lastName}</span></div>
                  <div className="detail-item"><span className="label">Email:</span><span className="value">{submission.email}</span></div>
                  <div className="detail-item"><span className="label">Phone:</span><span className="value">{submission.phone || "Not provided"}</span></div>
                </>
              )}
            </div>
          </div>
          <div className="detail-section">
            <h4>📋 Submission Details</h4>
            <div className="detail-grid">
              <div className="detail-item"><span className="label">Type:</span><span className="value">{submission.type === "enquiry" ? "General Enquiry" : "Quote Request"}</span></div>
              <div className="detail-item"><span className="label">Source:</span><span className="value">{submission.source || "—"}</span></div>
              <div className="detail-item"><span className="label">Date:</span><span className="value">{formatDate(submission.timestamp)}</span></div>
              <div className="detail-item"><span className="label">Status:</span><span className={`value status-${submission.status}`}>{submission.status?.toUpperCase()}</span></div>
            </div>
          </div>
          <div className="detail-section">
            <h4>💬 {submission.type === "enquiry" ? "Message" : "Work Description"}</h4>
            <div className="message-content">
              {submission.type === "enquiry" ? submission.message : submission.description}
            </div>
          </div>
          {submission.type === "quote" && (
            <div className="detail-section">
              <h4>🏗️ Project Details</h4>
              <div className="detail-grid">
                <div className="detail-item"><span className="label">Building Type:</span><span className="value">{submission.buildingType}</span></div>
                {submission.otherSpec && <div className="detail-item"><span className="label">Other Spec:</span><span className="value">{submission.otherSpec}</span></div>}
                <div className="detail-item"><span className="label">Roof Type:</span><span className="value">{submission.roofType}</span></div>
                {submission.wallTypes && <div className="detail-item"><span className="label">Wall Types:</span><span className="value">{submission.wallTypes}</span></div>}
                {submission.ceilingTypes && <div className="detail-item"><span className="label">Ceiling Types:</span><span className="value">{submission.ceilingTypes}</span></div>}
                {submission.additionalInfo && <div className="detail-item"><span className="label">Additional Info:</span><span className="value">{submission.additionalInfo}</span></div>}
              </div>
            </div>
          )}
          {(hasAttachments(submission) || submission.attachment) && (
            <div className="detail-section">
              <h4>📎 Attached Files {hasAttachments(submission) && `(${getAttachmentCount(submission)})`}</h4>
              {submission.attachments?.length > 0 && (
                <div className="attachments-list">
                  {submission.attachments.map((attachment, index) => (
                    <div key={index} className="attachment-item">
                      <div className="attachment-info">
                        <span className="file-icon">📄</span>
                        <div className="file-details">
                          <div className="file-name">{attachment.fileName}</div>
                          <div className="file-meta">Size: {attachment.fileSize ? (attachment.fileSize / 1024 / 1024).toFixed(2) : "—"} MB | Type: {attachment.fileType || "—"}</div>
                        </div>
                      </div>
                      {attachment.fileData ? (
                        <button type="button" onClick={() => downloadAttachment(attachment)} className="btn btn-sm btn-success">📥 Download</button>
                      ) : (
                        <span className="file-meta">(Not stored – file too large)</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {submission.attachment && !submission.attachments?.length && (
                <div className="attachments-list">
                  <div className="attachment-item">
                    <div className="attachment-info">
                      <span className="file-icon">📄</span>
                      <div className="file-details">
                        <div className="file-name">{submission.attachment.fileName}</div>
                        <div className="file-meta">Size: {(submission.attachment.fileSize / 1024 / 1024).toFixed(2)} MB | Type: {submission.attachment.fileType}</div>
                      </div>
                    </div>
                    {submission.attachment.fileData ? (
                      <button type="button" onClick={() => downloadAttachment(submission.attachment)} className="btn btn-sm btn-success">📥 Download</button>
                    ) : (
                      <span className="file-meta">(Not stored)</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="modal-actions">
          <div className="action-group-left">
            <button type="button" onClick={() => onDelete(submission.id, submission.type)} className="btn btn-danger">🗑️ Delete</button>
          </div>
          <div className="action-group-right">
            <button type="button" onClick={onClose} className="btn btn-secondary">Close</button>
            <a href={getEmailLink(submission)} className="btn btn-primary">📧 Reply via Email</a>
            <a href={getWhatsAppLink(submission)} target="_blank" rel="noopener noreferrer" className="btn btn-success">📱 Reply via WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
