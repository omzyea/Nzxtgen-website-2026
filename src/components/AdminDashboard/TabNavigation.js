import React from "react";

export function TabNavigation({ activeTab, onTabChange, productsCount, submissionsCount, totalUnread }) {
  return (
    <div className="tab-navigation">
      <button
        type="button"
        onClick={() => onTabChange("products")}
        className={`tab-button ${activeTab === "products" ? "active" : ""}`}
      >
        Products ({productsCount})
      </button>
      <button
        type="button"
        onClick={() => onTabChange("submissions")}
        className={`tab-button ${activeTab === "submissions" ? "active" : ""}`}
      >
        Form Submissions ({submissionsCount})
        {totalUnread > 0 && <span className="unread-badge">{totalUnread}</span>}
      </button>
    </div>
  );
}
