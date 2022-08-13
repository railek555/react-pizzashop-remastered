import React from 'react';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

/* import pizzas from './assets/pizzas.json'; */

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
