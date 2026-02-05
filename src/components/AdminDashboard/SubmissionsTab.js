import React from "react";
import { formatDate, hasAttachments, getAttachmentCount } from "../../utils/submissionUtils";

export function SubmissionsTab({
  submissionSearchTerm,
  handleSubmissionSearch,
  submissionFilter,
  handleSubmissionFilter,
  setShowAdvancedFilters,
  showAdvancedFilters,
  setShowExportModal,
  handleLogout,
  dateFilter,
  setDateFilter,
  customDateRange,
  setCustomDateRange,
  sourceFilter,
  setSourceFilter,
  buildingTypeFilter,
  setBuildingTypeFilter,
  hasAttachmentsFilter,
  setHasAttachmentsFilter,
  allSources,
  allBuildingTypes,
  resetAllFilters,
  selectedSubmissions,
  setSelectedSubmissions,
  bulkMarkAsRead,
  bulkDelete,
  bulkLoading,
  totalEnquiries,
  totalQuotes,
  unreadEnquiries,
  unreadQuotes,
  enquirySubmissions,
  quoteSubmissions,
  handleSelectAll,
  handleSelectSubmission,
  viewSubmission,
  totalUnread,
}) {
  return (
    <div className="submissions-section">
      <div className="submissions-controls">
        <div className="control-row">
          <input
            type="text"
            placeholder="Search submissions..."
            className="search-input"
            value={submissionSearchTerm}
            onChange={(e) => handleSubmissionSearch(e.target.value)}
          />
          <select value={submissionFilter} onChange={(e) => handleSubmissionFilter(e.target.value)} className="filter-select">
            <option value="all">All Status</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
          <button type="button" onClick={() => setShowAdvancedFilters((prev) => !prev)} className="btn btn-secondary">
            🔍 Advanced Filters
          </button>
          <button type="button" onClick={() => setShowExportModal(true)} className="btn btn-success">
            📤 Export Data
          </button>
          <button type="button" className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {showAdvancedFilters && (
          <div className="advanced-filters">
            <div className="filter-row">
              <div className="filter-group">
                <label>Date Range:</label>
                <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="last7days">Last 7 Days</option>
                  <option value="last30days">Last 30 Days</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              {dateFilter === "custom" && (
                <div className="filter-group">
                  <input type="date" value={customDateRange.start} onChange={(e) => setCustomDateRange((prev) => ({ ...prev, start: e.target.value }))} />
                  <input type="date" value={customDateRange.end} onChange={(e) => setCustomDateRange((prev) => ({ ...prev, end: e.target.value }))} />
                </div>
              )}
              <div className="filter-group">
                <label>Source:</label>
                <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)}>
                  <option value="all">All Sources</option>
                  {allSources.map((source) => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>Building Type:</label>
                <select value={buildingTypeFilter} onChange={(e) => setBuildingTypeFilter(e.target.value)}>
                  <option value="all">All Types</option>
                  {allBuildingTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>Attachments:</label>
                <select value={hasAttachmentsFilter} onChange={(e) => setHasAttachmentsFilter(e.target.value)}>
                  <option value="all">All</option>
                  <option value="yes">With Files</option>
                  <option value="no">No Files</option>
                </select>
              </div>
              <button type="button" onClick={resetAllFilters} className="btn btn-secondary">
                🔄 Reset Filters
              </button>
            </div>
          </div>
        )}

        {selectedSubmissions.length > 0 && (
          <div className="bulk-actions">
            <span>{selectedSubmissions.length} selected</span>
            <button type="button" onClick={bulkMarkAsRead} disabled={bulkLoading} className="btn btn-info">✓ Mark as Read</button>
            <button type="button" onClick={bulkDelete} disabled={bulkLoading} className="btn btn-danger">🗑️ Delete Selected</button>
            <button type="button" onClick={() => setSelectedSubmissions([])} className="btn btn-secondary">✕ Clear Selection</button>
          </div>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card enquiries"><h3>{totalEnquiries}</h3><p>Total Enquiries</p></div>
        <div className="stat-card quotes"><h3>{totalQuotes}</h3><p>Total Quotes</p></div>
        <div className="stat-card unread-enquiries"><h3>{unreadEnquiries}</h3><p>Unread Enquiries</p></div>
        <div className="stat-card unread-quotes"><h3>{unreadQuotes}</h3><p>Unread Quotes</p></div>
      </div>

      <div className="submissions-layout">
        <div className="submission-section">
          <div className="submission-header">
            <h3>📝 Enquiry Submissions <span className="submission-count">{enquirySubmissions.length}</span></h3>
            <input type="checkbox" onChange={() => handleSelectAll("enquiry")} checked={enquirySubmissions.length > 0 && enquirySubmissions.every((s) => selectedSubmissions.includes(`enquiry_${s.id}`))} />
          </div>
          <div className="submissions-container">
            {enquirySubmissions.length === 0 ? (
              <div className="empty-state">No enquiry submissions found.</div>
            ) : (
              <table className="submissions-table">
                <thead>
                  <tr><th>✓</th><th>Status</th><th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Files</th><th>Date</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {enquirySubmissions.map((submission) => (
                    <tr key={submission.id} className={submission.status === "unread" ? "unread" : ""}>
                      <td><input type="checkbox" checked={selectedSubmissions.includes(`enquiry_${submission.id}`)} onChange={() => handleSelectSubmission(submission.id, "enquiry")} /></td>
                      <td><span className={`status-badge ${submission.status}`}>{submission.status === "unread" ? "NEW" : "READ"}</span></td>
                      <td className="name-cell">{submission.name}</td>
                      <td>{submission.email}</td>
                      <td>{submission.phone}</td>
                      <td className="truncate">{(submission.message || "").substring(0, 50)}...</td>
                      <td><span className={`file-indicator ${hasAttachments(submission) ? "has-file" : "no-file"}`}>{hasAttachments(submission) ? `📎 ${getAttachmentCount(submission)}` : "-"}</span></td>
                      <td className="date-cell">{formatDate(submission.timestamp)}</td>
                      <td><button type="button" onClick={() => viewSubmission({ ...submission, type: "enquiry" })} className="btn btn-sm btn-info">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="submission-section">
          <div className="submission-header">
            <h3>💰 Quote Submissions <span className="submission-count">{quoteSubmissions.length}</span></h3>
            <input type="checkbox" onChange={() => handleSelectAll("quote")} checked={quoteSubmissions.length > 0 && quoteSubmissions.every((s) => selectedSubmissions.includes(`quote_${s.id}`))} />
          </div>
          <div className="submissions-container">
            {quoteSubmissions.length === 0 ? (
              <div className="empty-state">No quote submissions found.</div>
            ) : (
              <table className="submissions-table">
                <thead>
                  <tr><th>✓</th><th>Status</th><th>Name</th><th>Email</th><th>Phone</th><th>Building</th><th>Description</th><th>Files</th><th>Date</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {quoteSubmissions.map((submission) => (
                    <tr key={submission.id} className={submission.status === "unread" ? "unread" : ""}>
                      <td><input type="checkbox" checked={selectedSubmissions.includes(`quote_${submission.id}`)} onChange={() => handleSelectSubmission(submission.id, "quote")} /></td>
                      <td><span className={`status-badge ${submission.status}`}>{submission.status === "unread" ? "NEW" : "READ"}</span></td>
                      <td className="name-cell">{submission.firstName} {submission.lastName}</td>
                      <td>{submission.email}</td>
                      <td>{submission.phone}</td>
                      <td>{submission.buildingType}</td>
                      <td className="truncate">{(submission.description || "").substring(0, 50)}...</td>
                      <td><span className={`file-indicator ${hasAttachments(submission) ? "has-file" : "no-file"}`}>{hasAttachments(submission) ? `📎 ${getAttachmentCount(submission)}` : "-"}</span></td>
                      <td className="date-cell">{formatDate(submission.timestamp)}</td>
                      <td><button type="button" onClick={() => viewSubmission({ ...submission, type: "quote" })} className="btn btn-sm btn-info">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
