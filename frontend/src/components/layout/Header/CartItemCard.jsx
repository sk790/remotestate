import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="flex items-center pl-2 cursor-pointer text-red-500">
      <p onClick={() => deleteCartItems(item.product)}>Remove</p>
    </div>
  );
};

export default CartItemCard;
