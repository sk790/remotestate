import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/UserAction";
import { useEffect } from "react";
import { clearErrors } from "../../actions/ProductAction";
import { useAlert } from "react-alert";
import Loading from "../layout/Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const [avatar, setavatar] = useState();
  const [avatarPriview, setAvatarPriview] = useState();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const avatarChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPriview(reader.result);
        setavatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData.name, formData.email, formData.password, avatar));
    if (error) {
      alert.error(error.message);
      dispatch(clearErrors());
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error.message);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [error, dispatch, isAuthenticated, navigate, alert]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex w-full shadow-lg bg-gray-100 rounded-lg overflow-hidden h-[100vh]">
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
            <form className="w-3/4">
              <h2 className="text-2xl mb-2">Sign up</h2>
              <p className="text-sm mb-5">
                Already have an account?{" "}
                <a href="/login" className="text-green-500 font-bold">
                  Sign in
                </a>
              </p>

              {/* Input Fields */}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div className="relative mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none"
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
              <div className="flex items-start mb-5">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms">
                  I agree with{" "}
                  <a href="#" className="text-green-500">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-500">
                    Terms of Use
                  </a>
                </label>
              </div>

              {/* Sign Up Button */}
              <div>
                <button className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
