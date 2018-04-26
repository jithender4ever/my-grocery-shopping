import React from 'react';
import '../styles/ShoppingBanner.css';

const ShoppingBanner = () => {
  return (
    <div className="Banner">
      <h1 className="title">Welcome to the Grocery App</h1>
      <h3 className="sub-title">*create your shopping list by adding items in the text box</h3>
      <h3 className="sub-title">*click on items in the list after purchasing, to strike them off</h3>
    </div>
  );
};

export default ShoppingBanner ;
