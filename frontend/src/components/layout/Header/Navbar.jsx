import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { logoutUser } from "../../../actions/UserAction";


const Navbar = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [cartOpen, setCartOpen] = useState(false); // State to control cart visibility
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control profile dropdown visibility
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    dispatch(logoutUser());
    navigate("/login");
    window.location.reload();
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      {/* Notification Bar */}
      {showNotification && (
        <div className="bg-gray-200 text-black flex justify-between items-center p-3">
          <div>
            <span role="img" aria-label="discount">
              🛒 30% off storewide — Limited time!
            </span>
            <a href="#" className="ml-2 text-blue-600 underline">
              Shop Now →
            </a>
          </div>
          <button
            className="text-lg font-bold cursor-pointer"
            onClick={handleCloseNotification}
          >
            <IoMdClose />
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-32 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/">3legant.</a>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-gray-700">
              Shop
            </a>
          </li>
          <li>
            <a href="/product" className="hover:text-gray-700">
              Product
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-700">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4 relative">
          <a href="/search">
            <i className="text-xl cursor-pointer">
              <FaSearch />
            </i>
          </a>
          <a href="#" onClick={toggleCart}>
            <i className="text-xl cursor-pointer">
              <MdShoppingCart />
            </i>
          </a>

          {isAuthenticated && (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-xl cursor-pointer"
              >
                <FaUserAlt />
              </button>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  {user && user.role === "admin" && (
                    <a
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                  )}
                  <a
                    href="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Orders
                  </a>
                  <a
                    href="/cart"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Cart
                  </a>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <div
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Sliding Cart */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } w-96 z-50 p-4 flex flex-col justify-between`}
      >
        <div>
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <button className="text-lg" onClick={toggleCart}>
              <IoMdClose />
            </button>
          </div>
          <div className="mt-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <p>Cart is empty</p>
            )}
          </div>
        </div>

        {/* Total and Checkout */}
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <a href={"/checkout"}>
            <button className="w-full bg-blue-500 text-white py-2 mt-4 hover:bg-blue-600">
              Checkout
            </button>
          </a>
        </div>
      </div>

      {cartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleCart}
        />
      )}
    </div>
  );
};

export default Navbar;
