import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductPage, { CartContext } from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import CartProvider from "./context/CartContext";

function App() {

  
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </CartProvider>
    
  );
};

export default App;
