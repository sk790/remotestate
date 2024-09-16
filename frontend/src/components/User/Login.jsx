import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/UserAction";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import Loading from "../layout/Loading/Loading";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { error,isAuthenticated, loading } = useSelector(
    (state) => state.user
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, isAuthenticated, redirect, location.search, navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex w-full shadow-lg h-[100vh] bg-gray-100 rounded-lg overflow-hidden">
          {/* Left Side Image Section */}
          <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 relative">
            <div className="absolute top-5 left-5 text-2xl font-bold text-black">
              Logo
            </div>
            <img
              src="../images/Left.png"
              alt="chair"
              className="w-4/5 h-auto"
            />
          </div>

          {/* Right Side Form Section */}
          <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
            <form className="w-3/4" onSubmit={handleSubmit}>
              <h2 className="text-2xl mb-2">Sign In</h2>
              <p className="text-sm mb-5">
                Don't have an account yet?{" "}
                <Link to="/signup" className="text-green-500 font-bold">
                  Sign Up
                </Link>
              </p>

              {/* Input Fields */}
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Your Username or Email address"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </div>
              <div className="relative mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                <svg
                  className="absolute right-2 top-3 w-6 h-6 text-gray-500 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Terms and Conditions */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms">Remember me</label>
                </div>
                <a href="#" className="font-bold text-black">
                  Forget password?
                </a>
              </div>

              {/* Sign In Button */}
              <div>
                <button className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
