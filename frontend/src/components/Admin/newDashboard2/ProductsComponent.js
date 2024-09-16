import React, { useState } from "react";
// import "./Products.css"; // Add appropriate CSS for this component
import AddProductComponent from "./AddProductComponent.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductsComponent = ({ setActiveTab }) => {
  const { products: product } = useSelector((state) => state.allProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [activeView, setActiveView] = useState("productList"); // States to track the view

  const [products, setProducts] = useState(product);
  const [activeProductId, setActiveProductId] = useState(null);

  const handleEditProduct = (productId) => {
    setSelectedProduct(productId);
    setActiveTab("EditProduct");
  };
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setActiveView("productList");
  };

  // Function to switch to add new product view
  const handleAddNewProductClick = () => {
    setActiveView("addProduct");
  };

  return (
    <div className="products-page">
      <h2>Products</h2>
      <div className="banner">
        <h4>Enjoy free home delivery in this summer</h4>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.images && product.images[0].url}
              alt={product.name}
            />
            <h3>{product && product.name}</h3>
            <p>{product && product.price}</p>
            <div className="rating">
              {Array(product && product.ratings).fill("⭐")}
              <span>({product && product.numOfReviews})</span>
            </div>
            <Link to={`/admin/product/${product && product._id}`}>
              <button
                onClick={() => handleEditProduct(product && product._id)}
                className="bg-orange-300 p-1 rounded-sm w-full "
              >
                Edit Product
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="add-product">
        <button onClick={handleAddNewProductClick}>+ Add New Product</button>
        {activeView === "addProduct" && (
          <AddProductComponent onAddProduct={handleAddProduct} />
        )}
      </div>
    </div>
  );
};

export default ProductsComponent;
