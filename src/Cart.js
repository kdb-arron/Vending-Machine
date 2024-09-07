import React from 'react';
import './Cart.css';

function Cart({ cart, removeFromCart }) {
  const snackImages = {
    chips: 'https://c.media-amazon.com/images/I/813axPlVxBL._SX679_.jpg',
    candy: 'https://c.media-amazon.com/images/I/41p4E90XgeL._SX300_SY300_QL70_FMwebp_.jpg',
    soda: 'https://c.media-amazon.com/images/I/41caxocbCFL._SX300_SY300_QL70_FMwebp_.jpg',
  };

  if (Object.keys(cart).length === 0) {
    return <div className="cart-container">Empty</div>;
  }

  return (
    <div>
        <h1>Cart</h1>
      {Object.keys(cart).map((snack) => (
        <div className="cart-container" key={snack}> 
          <img src={snackImages[snack]} alt={snack} width="50" />
          <span>{snack} (x{cart[snack]})</span>
          <button onClick={() => removeFromCart(snack)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
