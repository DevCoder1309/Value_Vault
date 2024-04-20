// ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ website, productName, brand, imageUrl, price }) => {
  return (
    <div className="product-card">
      <h3>{website}</h3>
      <img src={imageUrl} alt={productName} width={150} height={150}/>
      <p style={{fontWeight: 'bold'}}>{productName}</p>
      <p>Brand: {brand}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default ProductCard;
