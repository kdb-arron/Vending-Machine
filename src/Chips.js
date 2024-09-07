import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css';

function Chips({ addToCart }) {
  return (
    <div className="snack-container">
      <h1>Chips</h1>
      <img src="https://c.media-amazon.com/images/I/813axPlVxBL._SX679_.jpg" alt="Chips" />
      <button onClick={() => addToCart('chips')}>Add to Cart</button>
      <button>  
        <Link to="/">Go Back to Vending Machine</Link>
      </button>
    </div>
  );
}

export default Chips;
