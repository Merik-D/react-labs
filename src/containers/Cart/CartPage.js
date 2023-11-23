import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="section">
      <h2 className="title">Songs Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>
        <h4>Total amount: {calculateTotalAmount()}</h4>
      </div>
      <div className="buttons_cart_page">
        <NavLink className="item_page_button" to={`/catalog`}>
          Back
        </NavLink>
        <button className="item_page_button">Continue</button>
      </div>
    </div>
  );
};

export default CartPage;
