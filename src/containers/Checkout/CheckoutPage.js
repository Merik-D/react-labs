import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="section">
      <h2 className="title">Checkout Page</h2>
      <CheckoutForm setFormSubmitted={setFormSubmitted} />
      <div className="buttons_cart_page">
        <NavLink className="item_page_button" to={`/catalog`}>
          Back
        </NavLink>
        {formSubmitted && (
          <NavLink className="item_page_button" to={`/success`}>
            Continue
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
