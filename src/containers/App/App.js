import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/catalog" element ={<Catalog />} /> 
        <Route path="/cart" element ={<div className="cart">Its Cart page</div>} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
