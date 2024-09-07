import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css';

function Candy({ addToCart }) {
  return (
    <div className="snack-container">
      <h1>Candy</h1>
      <img src="https://c.media-amazon.com/images/I/41p4E90XgeL._SX300_SY300_QL70_FMwebp_.jpg" alt="Candy" />
      <button onClick={() => addToCart('candy')}>Add to Cart</button>
      <button>  
        <Link to="/">Go Back to Vending Machine</Link>
      </button>
    </div>
  );
}

export default Candy;
