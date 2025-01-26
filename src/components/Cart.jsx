// Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div style={{ position: 'relative', top: 50, right: 20, padding: '10px', backgroundColor: '#fff', border: '1px solid #ccc', height:'50px', width:'150px' }}>
      <i className="fas fa-shopping-cart"></i>
      <span>{cart.length} Products</span>
    </div>
  );
};

export default Cart;
