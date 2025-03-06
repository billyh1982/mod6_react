import React from 'react';
import './ProductItem.css';


const ProductItem = ({ product }) => {
  return (
      <div className="product-item">
      <img src="../src/beard oil backdrop.png" alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;