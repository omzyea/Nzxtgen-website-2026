import React from "react";

export function DashboardHeader({ storageInfo, onStorageClick }) {
  return (
    <div className="dashboard-header">
      <div>
        <h2>Admin Dashboard</h2>
        <p className="subtext">Manage your products, form submissions, and more.</p>
      </div>
      <div className="storage-widget" onClick={onStorageClick}>
        <div className="storage-bar">
          <div
            className="storage-fill"
            style={{
              width: `${Math.min(storageInfo.percentage, 100)}%`,
              backgroundColor:
                storageInfo.percentage > 90 ? "#dc3545" : storageInfo.percentage > 70 ? "#ffc107" : "#28a745",
            }}
          />
        </div>
        <span className="storage-text">
          {storageInfo.used.toFixed(1)}MB / {storageInfo.total}MB ({storageInfo.percentage.toFixed(1)}%)
        </span>
      </div>
    </div>
  );
}
