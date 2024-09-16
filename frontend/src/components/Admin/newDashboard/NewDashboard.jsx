import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatisticsCard from "./components/StatisticsCard";
import SalesGraph from "./components/SalesGraph";
import DealsDetails from "./components/DealsDetails";
import { HiUsers } from "react-icons/hi2";
import { GiCube } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAdmin } from "../../../actions/ProductAction";
import { allOrdersAction } from "../../../actions/OrderAction";
import { getAllUsers } from "../../../actions/UserAction";

const NewDashboard = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.allProducts);
  const {orders} = useSelector((state) => state.allOrders);
  const {users} = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllProductsAdmin());
    dispatch(allOrdersAction());
    dispatch(getAllUsers());
  },[dispatch]);
  // const
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="statistics">
          <StatisticsCard
            title="Total User"
            value={users&&users.length}
            change="8.5% Up"
            icon={HiUsers}
            bg="bg-blue-200"
            text="text-blue-400"
          />
          <StatisticsCard
            title="Total Order"
            value={orders&&orders.length}
            change="1.3% Up"
            icon={GiCube}
            bg="bg-yellow-200"
            text="text-yellow-400"
          />
          <StatisticsCard
            title="Total Sales"
            value="$89,000"
            change="4.3% Down"
            icon={GoGraph}
            bg="bg-green-200"
            text="text-green-400"
          />
          <StatisticsCard
            title="Total Products"
            value={products&&products.length}
            change="1.8% Up"
            icon={BiTimeFive}
            bg="bg-orange-200"
            text="text-orange-400"
            q
          />
        </div>
        <SalesGraph />
        <DealsDetails />
      </div>
    </div>
  );
};

export default NewDashboard;
