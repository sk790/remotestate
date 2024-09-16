import React, { useState } from "react";
// import "./EditProduct.css"; // Add appropriate CSS for this component

const EditProductComponent = ({productId, setActiveTab }) => {
  console.log({ productId });

  const [formData, setFormData] = useState({
    name: "Tray Table",
    price: "$199.00",
    discountPrice: "$400.00",
    color: "Black",
    sku: "1197",
    category: "Living Room, Bedroom",
    details: "You can use the removable tray for serving...",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  });

  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setActiveTab("Products"); // Go back to the product list after saving
  };

  return (
    <div className="edit-product-page">
      <h2>Edit Product</h2>
      <div className="product-images">
        {formData.images.map((img, idx) => (
          <div key={idx} className="image-container">
            <img src={img} alt={`Product ${idx + 1}`} />
            <button className="remove-img-btn">x</button>
          </div>
        ))}
        <button className="add-img-btn">+</button>
      </div>
      <div className="product-details">
        <h3>{formData.name}</h3>
        <p>
          <strong>{formData.price}</strong>{" "}
          <span>{formData.discountPrice}</span>
        </p>
        <div className="product-options">
          <div className="product-color">
            <label>Choose Color</label>
            <select
              value={formData.color}
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
            >
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
            </select>
          </div>
          <div className="product-info">
            <p>SKU: {formData.sku}</p>
            <p>Category: {formData.category}</p>
          </div>
        </div>
        <h4>Additional Info</h4>
        <p>{formData.details}</p>
        <button className="remove-product-btn">Remove this product</button>
      </div>
      <div className="action-buttons">
        <button className="save-btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
        <button className="cancel-btn" onClick={() => setActiveTab("Products")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditProductComponent;
