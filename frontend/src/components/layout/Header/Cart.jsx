import React, { useState } from "react";
import CartItem from "./CartItem";
import { IoMdClose } from "react-icons/io";

function Cart() {
  const [showNotification, setShowNotification] = useState(true);
  const [cartOpen, setCartOpen] = useState(false); // State to control cart visibility
  const [dropdownOpen, setDropdownOpen] = useState(false); //
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } w-96 z-50 p-4`}
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button className="text-lg" onClick={toggleCart}>
            <IoMdClose />
          </button>
        </div>
        <div className="mt-4">
          <p>Your cart is empty.</p>
          <CartItem />
        </div>
      </div>

      {/* Backdrop (optional, if you want to close cart when clicking outside) */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleCart}
        />
      )}
    </>
  );
}

export default Cart;
