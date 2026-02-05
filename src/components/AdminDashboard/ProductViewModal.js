import React from "react";

export function ProductViewModal({ open, item, onClose }) {
  if (!open || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{item.name}</h2>
            <h4>Package Includes:</h4>
            <ul className="package-list">
              {item.packageIncludes?.map((pkg, idx) => (
                <li key={idx}>{pkg}</li>
              ))}
            </ul>
            <h4>Features:</h4>
            <ul className="feature-list">
              {item.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="modal-price">${item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
