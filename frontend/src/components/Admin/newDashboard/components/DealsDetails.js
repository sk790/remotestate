import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";

const DealsDetails = () => {
  const deals = [
    {
      product: "Apple Watch",
      location: "6096 Marjolaine Landing",
      date: "12.09.2019",
      time: "12.53 PM",
      amount: "$34,295",
      status: "Delivered",
    },
    // Add more deal objects...
  ];
  function convertDate(date) {
    const newDate = new Date(date);
    const hours = newDate.getUTCHours();
    const minutes = newDate.getUTCMinutes();
    return newDate.toDateString() + " " + hours + ":" + minutes;
  }
  const { orders } = useSelector((state) => state.allOrders);
  return (
    <table className="deals-details">
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
              <td>{deal.orderStatus}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DealsDetails;
