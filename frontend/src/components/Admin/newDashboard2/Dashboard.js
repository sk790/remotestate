import React, { useEffect, useState } from "react";
import "./Deshboard.css";
import Sidebar from "./Sidebar"; // Import your Sidebar component
import DashboardComponent from "./DashboardComponent"; // Import the actual Dashboard component
import ProductsComponent from "./ProductsComponent.js"; // Import Products component
import EditProductComponent from "./EditProductComponent.js"; // Import EditProduct component
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAdmin } from "../../../actions/ProductAction";
import { allOrdersAction } from "../../../actions/OrderAction";
import { getAllUsers } from "../../../actions/UserAction";
const Deshboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.allProducts);
  const { orders } = useSelector((state) => state.allOrders);
  const { user } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.allUsers);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(getAllProductsAdmin());
    dispatch(allOrdersAction());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="headerfordeshboard">
      <header className="header12">
        <div className="logo">
          <h1>3legant</h1>
        </div>
        <div className="profileheader">
          <div className="search-bar">
            <input type="text" placeholder="Search"></input>
          </div>
          <div className="profile">
            <img src="../images/user.png" alt="Moni Roy" />
            <span>{user && user.name}</span>
          </div>
        </div>
      </header>
      <div className="dashboard">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
        {/* Pass activeTab and setActiveTab as props */}
        <div className="main-content">
          {/* Conditionally render components based on the active tab */}
          {activeTab === "Dashboard" && <DashboardComponent />}
          {/* {activeTab === "Products" && <ProductsComponent />} */}
          <div className="main-content">
            {activeTab === "Products" && (
              <ProductsComponent setActiveTab={setActiveTab} />
            )}
            {activeTab === "EditProduct" && (
              <EditProductComponent
                product={selectedProduct}
                setActiveTab={setActiveTab}
              />
            )}
          </div>
          {activeTab === "Favorites" && <div>Favorites Content</div>}
          {activeTab === "Inbox" && <div>Inbox Content</div>}
          {activeTab === "Order Lists" && <div>Order Lists Content</div>}
          {activeTab === "Product Stock" && <div>Product Stock Content</div>}
        </div>
      </div>
    </div>
  );
};

export default Deshboard;
