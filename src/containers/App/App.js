import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "../Home/Home";
import CatalogPage from "../Catalog/CatalogPage";
import ItemPage from "../ItemPage/ItemPage";
import CartPage from "../Cart/CartPage";
import CheckoutPage from "../Checkout/CheckoutPage";
import SuccessPage from "../SuccessPage/SuccessPage";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usersList")) || [];
    const user = storedUsers.find((user) => user.isLoggedin);

    if (user) {
      setLoggedInUser(true);
    } else {
      setLoggedInUser(false);
    }
  }, []);

  return (
    <Router>
      {loggedInUser && <Header />}
      <Routes>
        <Route
          path="/"
          element={loggedInUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/catalog"
          element={loggedInUser ? <CatalogPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={loggedInUser ? <CartPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/card/:songId"
          element={loggedInUser ? <ItemPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={loggedInUser ? <CheckoutPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/success"
          element={loggedInUser ? <SuccessPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            loggedInUser ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={() => setLoggedInUser(true)} />
            )
          }
        />
        <Route
          path="/register"
          element={
            loggedInUser ? (
              <Navigate to="/" />
            ) : (
              <Register onLogin={() => setLoggedInUser(true)} />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
