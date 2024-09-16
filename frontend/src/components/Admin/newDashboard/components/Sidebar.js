
import React from 'react';
import "../styles.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>3legant.</h2>
      </div>
      <ul className="sidebar-nav">
        <li>Dashboard</li>
        <li>Products</li>
        <li>Favorites</li>
        <li>Inbox</li>
        <li>Order Lists</li>
        <li>Product Stock</li>
      </ul>
    </div>
  );
};

export default Sidebar;
