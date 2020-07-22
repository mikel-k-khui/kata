import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="Product">
        <div className="Product-text-wrapper">
          <h2 className="Product-text">
            Explore our innovative, proven products.
          </h2>
          <h4 className="Product-text">
            We offer a full range of product lines for successful and efficient subsurface investigation programs. And we can help you build a full solution for multiple stakeholders.
          </h4>
          <img className="Product-text" src="assets/product/product.svg" alt="Products"/>
        </div>
    </div>
  );
}

export default Product;
