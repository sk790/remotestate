import React from "react";
import "./Deshboard.css";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <ul>
        <li
          className={activeTab === "Dashboard" ? "active" : ""}
          onClick={() => setActiveTab("Dashboard")}
        >
          Dashboard
        </li>
        <li
          className={activeTab === "Products" ? "active" : ""}
          onClick={() => setActiveTab("Products")}
        >
          Products
        </li>
        <li
          className={activeTab === "Favorites" ? "active" : ""}
          onClick={() => setActiveTab("Favorites")}
        >
          Favorites
        </li>
        <li
          className={activeTab === "Inbox" ? "active" : ""}
          onClick={() => setActiveTab("Inbox")}
        >
          Inbox
        </li>
        <li
          className={activeTab === "Order Lists" ? "active" : ""}
          onClick={() => setActiveTab("Order Lists")}
        >
          Order Lists
        </li>
        <li
          className={activeTab === "Product Stock" ? "active" : ""}
          onClick={() => setActiveTab("Product Stock")}
        >
          Product Stock
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
