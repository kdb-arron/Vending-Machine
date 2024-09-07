import React from 'react';
import Cart from './Cart';
import './VendingMachine.css';

function VendingMachine({ cart, removeFromCart }) {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default VendingMachine;
