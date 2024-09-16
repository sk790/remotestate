
import React from 'react';
import "../styles.css";
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const {user} = useSelector((state) => state.user);
  return (
    <div className="header">
      <input type="text" placeholder="Search..." />
      <div className="user-info flex items-center bg-green-100 rounded-full p-3">
        <p className="profile-pic"><FaUserAlt className='text-2xl cursor-pointer'/></p>
        <span>{user&&user.name}</span>
      </div>
    </div>
  );
};

export default Header;
