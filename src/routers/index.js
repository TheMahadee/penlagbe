import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Category, Product } from '../views';
import { Header, Footer } from '../components';

export default function RoutesCore() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/:categoryName' element={<Category />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}