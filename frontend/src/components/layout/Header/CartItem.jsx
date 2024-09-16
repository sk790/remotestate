import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  addItemsToCart,
  removeItemFromCart,
} from "../../../actions/CartAction";
import CartItemCard from "./CartItemCard";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemFromCart(id));
    toast.success("Remove from cart");
  };

  return (
    <>
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        {/* Product Image */}
        <img
          src={item.image} // Replace with actual product image URL
          alt="Tray Table"
          className="w-16 h-16 object-cover"
        />

        {/* Product Details */}
        <div className="flex-1 ml-4">
          <h3 className="text-sm font-medium">{item.name}</h3>
          <p className="text-gray-500 text-sm">Color: Black</p>
        </div>

        {/* Price */}
        <div className="text-md font-semibold px-1">${item.price}</div>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2 border border-gray-300 rounded">
          <button
            onClick={() => decreaseQuantity(item.product, item.quantity)}
            className="px-1 text-xl text-gray-600 hover:text-black"
          >
            -
          </button>
          <span className="px-2 text-lg">{item.quantity}</span>
          <button
            onClick={() =>
              increaseQuantity(item.product, item.quantity, item.stock)
            }
            className="text-xl text-gray-600 hover:text-black"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <CartItemCard item={item} deleteCartItems={deleteCartItems} />
      </div>
    </>
  );
};

export default CartItem;
