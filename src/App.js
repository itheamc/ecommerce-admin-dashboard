import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home/HomePage';
import OrdersPage from './pages/orders/OrdersPage';
import ProductsPage from './pages/products/ProductsPage';

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="side-menu-container">
          <div className="side-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="body-content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
