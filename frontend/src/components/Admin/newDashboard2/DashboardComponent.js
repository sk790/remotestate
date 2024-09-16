import React from "react";
import "../newDashboard/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const DashboardComponent = () => {

  const { products } = useSelector((state) => state.allProducts);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);
  
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard">
        {/* <Sidebar /> */}
        <div className="main-content">
          {/* <Header /> */}
          <div className="info-cards">
            <InfoCard
              title={"Total User"}
              value={users && users.length}
              percentage="+8.5%"
              icon="../images/user.png"
            />
            <InfoCard
              title="Total Order"
              value={orders && orders.length}
              percentage="+1.3%"
              icon="../images/order.png"
            />
            <InfoCard
              title="Total Sales"
              value="$89,000"
              percentage="-4.3%"
              icon="../images/sales.png"
            />
            <InfoCard
              title="Total Products"
              value={products && products.length}
              percentage="+1.8%"
              icon="../images/pending.png"
            />
          </div>
          <div className="chart-section">
            <SalesChart />
          </div>
          <div className="deals-table">
            <DealsTable />
          </div>
        </div>
      </div>
    </div>
  );
};
const InfoCard = ({ title, value, percentage, icon }) => {

  return (
    <div className="info-card">
      <div className="info-card-info">
        <div className="info-card-content">
          <h3>{title}</h3>
          <p>{value}</p>
        </div>
        <div className="info-card-icon">
          <img src={icon} alt={title} />
        </div>
      </div>
      <p>{percentage}</p>
    </div>
  );
};
const SalesChart = () => {
  const data = [
    { name: "5k", uv: 400 },
    { name: "10k", uv: 500 },
    { name: "15k", uv: 700 },
    { name: "20k", uv: 1400 },
    { name: "25k", uv: 800 },
  ];
  return (
    <div className="sales-graph">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
const DealsTable = () => {
  const { orders } = useSelector((state) => state.allOrders);
  function convertDate(date) {
    const newDate = new Date(date);
    const hours = newDate.getUTCHours();
    const minutes = newDate.getUTCMinutes();
    return newDate.toDateString() + " " + hours + ":" + minutes;
  }

  return (
    <div className="deals-table">
      <h3>Deals Details</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Location</th>
            <th>Date - Time</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {orders &&
          orders.map((deal, index) => (
            <tr key={index}>
              <td>{deal.orderItems[index].name}</td>
              <td>{deal.shippingInfo.city}</td>
              <td>
                {convertDate(deal.deliveredAt)} - {deal.time}
              </td>
              <td>{deal.totalPrice}</td>
              <td className="text-green-500">{deal.orderStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DashboardComponent;
