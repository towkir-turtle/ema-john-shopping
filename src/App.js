import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../src/components/Header/Header';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Shop from './pages/Shop/Shop';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
};

export default App;
