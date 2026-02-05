import React from "react";
import { ProductFormModal } from "./ProductFormModal";
import { ProductViewModal } from "./ProductViewModal";

const controlsStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "end",
  gap: "20px",
};
const inputStyle = { width: "300px", padding: "8px", backgroundColor: "#f0f0f0", borderRadius: "6px", border: "1px solid #ccc" };
const btnStyle = { margin: "20px 0", padding: "10px 24px", color: "white", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" };

export function ProductsTab({
  products,
  setProducts,
  allProducts,
  searchTerm,
  setSearchTerm,
  showModal,
  openAddProductModal,
  closeAddProductModal,
  handleLogout,
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
  modalItem,
  isModalOpen,
  openProductModal,
  closeProductModal,
  handleEdit,
  handleDelete,
}) {
  return (
    <>
      <div style={controlsStyle}>
        <input
          type="text"
          placeholder="Search products..."
          style={inputStyle}
          value={searchTerm}
          onChange={(e) => {
            const term = e.target.value.toLowerCase();
            setSearchTerm(e.target.value);
            setProducts(
              allProducts.filter((item) => item.name.toLowerCase().includes(term))
            );
          }}
        />
        <button style={{ ...btnStyle, backgroundColor: "#007bff" }} onClick={openAddProductModal}>
          + Add New Product
        </button>
        <button style={{ ...btnStyle, backgroundColor: "#dc3545" }} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <ProductFormModal
        open={showModal}
        onClose={closeAddProductModal}
        newItem={newItem}
        handleFormChange={handleFormChange}
        handleArrayChange={handleArrayChange}
        handleAddField={handleAddField}
        handleRemoveField={handleRemoveField}
        openCloudinaryWidget={openCloudinaryWidget}
        handleFormSubmit={handleFormSubmit}
        loading={loading}
        imgReady={imgReady}
        isEditing={isEditing}
      />

      <h2>Current Products</h2>
      <div className="card-grid" style={{ width: "100%" }}>
        {products.length === 0 ? (
          <p className="no-items">No items found.</p>
        ) : (
          products.map((item) => (
            <div className="item-card" key={item.id}>
              <img src={item.img} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p className="price">${item.price.toLocaleString()}</p>
              <div className="card-buttons">
                <button className="view-btn" onClick={() => openProductModal(item)}>View</button>
                <button className="edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <ProductViewModal open={isModalOpen} item={modalItem} onClose={closeProductModal} />
    </>
  );
}
