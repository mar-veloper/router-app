import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonthIndex = date.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const currentMonth = monthNames[currentMonthIndex];

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to={`/posts/${currentYear}/${currentMonth}`}>Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
