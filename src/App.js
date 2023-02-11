import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/products-page";
import CartPage from "./components/pages/cart-page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </header>

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
