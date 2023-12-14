import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "../Home/Home";
import CatalogPage from "../Catalog/CatalogPage";
import ItemPage from "../ItemPage/ItemPage";
import CartPage from "../Cart/CartPage";
import CheckoutPage from "../Checkout/CheckoutPage";
import SuccessPage from "../SuccessPage/SuccessPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/card/:songId" element={<ItemPage />} />
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
