import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css';

function Soda({ addToCart }) {
  return (
    <div className="snack-container">
      <h1>Soda</h1>
      <img src="https://c.media-amazon.com/images/I/41caxocbCFL._SX300_SY300_QL70_FMwebp_.jpg" alt="Soda" />
      <button onClick={() => addToCart('soda')}>Add to Cart</button>
      <button>  
        <Link to="/">Go Back to Vending Machine</Link>
      </button>
    </div>
  );
}

export default Soda;
