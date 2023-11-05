import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Songs from "../Songs/Songs";


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/catalog" element ={<div className="catalog">Its Catalog page</div>} /> 
        <Route path="/cart" element ={<div className="cart">Its Cart page</div>} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
