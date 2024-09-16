import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar.jsx";
import { Typography } from "@material-ui/core";
import { Line, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProductsAdmin } from "../../actions/ProductAction.js";
import Loading from "../layout/Loading/Loading.jsx";
import { allOrdersAction } from "../../actions/OrderAction.js";
import { getAllUsers } from "../../actions/UserAction.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  let outOfStock = 0;
  let inStock = 0;

  const { products, loading } = useSelector((state) => state.allProducts);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  let totalAmount = 0;
  orders &&
    orders.forEach((amount) => {
      totalAmount += amount.totalPrice;
    });

  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      } else {
        inStock += 1;
      }
    });
  // const inStock = products.lenght - outOfStock;

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };
  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, inStock],
      },
    ],
  };

  useEffect(() => {
    dispatch(getAllProductsAdmin());
    dispatch(allOrdersAction());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashbord">
          <Sidebar />
          <div className="dashboardContainer">
            <Typography component="h1">Dashboard</Typography>
            <div className="dashboardSummary">
              <div>
                <p>
                  Total Amount <br /> ₹{totalAmount}
                </p>
              </div>
              <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                  <p>Product</p>
                  {/* <p>{products && products.length}</p> */}
                  <p>{products && products.length}</p>
                </Link>
                <Link to="/admin/orders">
                  <p>Orders</p>
                  {/* <p>{orders && orders.length}</p> */}
                  <p>{orders && orders.length}</p>
                </Link>
                <Link to="/admin/users">
                  <p>Users</p>
                  <p>{users && users.length}</p>
                </Link>
              </div>
            </div>
            <div className="lineChart">
              <Line data={lineState} />
            </div>
            <div className="doughnutChart">
              <Doughnut data={doughnutState} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
