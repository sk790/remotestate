import React, { useState } from "react";
import "./AddProductComponent.css"; // Add your styles here

const AddProductComponent = ({ onAddProduct }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [details, setDetails] = useState("");
  const [colors, setColors] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleAddProduct = () => {
    const newProduct = {
      title,
      description,
      price,
      mrp,
      details,
      colors,
      additionalInfo,
    };
    
    // Trigger callback to add the product
    onAddProduct(newProduct);

    // Clear the form
    setTitle("");
    setDescription("");
    setPrice("");
    setMrp("");
    setDetails("");
    setColors("");
    setAdditionalInfo("");
  };

  return (
    <div className="add-product-page">
      <h2>Edit Product</h2>

      <div className="form-section">
        <label>Add Product Title</label>
        <input
          type="text"
          placeholder="Enter product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Add Description</label>
        <textarea
          placeholder="Enter product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="price-section">
          <div className="input-group">
            <label>Add Price</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Add MRP or Price Before Discount</label>
            <input
              type="number"
              placeholder="Enter MRP"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
            />
          </div>
        </div>

        <label>Measurements</label>
        <textarea
          placeholder="Add details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <label>Add Colors</label>
        <input
          type="text"
          placeholder="Enter colors"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />

        <label>Additional Info</label>
        <textarea
          placeholder="Enter additional information"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />

        <button className="add-product-btn" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProductComponent;
