import React from "react";
import { NavLink } from "react-router-dom";
import success_icon from "../../Icons/success.png"
import "./SuccessPage.css"

const SuccessPage = () => {
  return (
    <div className="section">
      <h2 className="title">Success Page</h2>
      <img src={success_icon} alt="Success" className="success_img"/>
      <p>Your order has been successfully submitted. Thank you for shopping with us!</p>
      <NavLink className="item_page_button" to={`/catalog`}>Go back to Catalog</NavLink>
    </div>
  );
};

export default SuccessPage;
