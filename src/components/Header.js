import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
          <button className="login" onClick={
            () => {
              setIsLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login");
            }
          }>{isLoggedIn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
