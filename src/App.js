import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'; 
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';

function App() {
  const [cart, setCart] = useState({});

  // Function to add items to the cart
  const addToCart = (snack) => {
    setCart((prevCart) => ({
      ...prevCart,
      [snack]: (prevCart[snack] || 0) + 1,
    }));
  };

  // Function to remove items from the cart
  const removeFromCart = (snack) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[snack] > 1) {
        newCart[snack] -= 1;
      } else {
        delete newCart[snack];
      }
      return newCart;
    });
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<VendingMachine cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/chips" element={<Chips addToCart={addToCart} />} />
        <Route path="/candy" element={<Candy addToCart={addToCart} />} />
        <Route path="/soda" element={<Soda addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
