import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../../Navigation/Navigation";

const Header = () => {
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    const updatedUsersList = usersList.map((user) => {
      if (user.isLoggedin) {
        return {
          ...user,
          isLoggedin: false,
        };
      }
      return user;
    });

    localStorage.setItem("usersList", JSON.stringify(updatedUsersList));
    // navigate("/login");
    window.location.reload();
  };

  const loggedInUser = usersList.find((user) => user.isLoggedin === true);

  const shouldRenderHeader = () => {
    return !(location.pathname === "/login" || location.pathname === "/register");
  };

  return shouldRenderHeader() ? (
    <div className="container">
      <header className="header">
        <Navigation />
        {loggedInUser ? (
          <div className="user-info">
            <span>{loggedInUser.userName}</span>
            <button onClick={handleLogout}>
              <span role="img" aria-label="Logout">
                🚪
              </span>
            </button>
          </div>
        ) : null}
      </header>
    </div>
  ) : null;
};

export default Header;
