import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import productsData from './productsData';

import './ProductBox.css';

const ProductBox = () => {
  const productbox = productsData.map(product => {
    return (
      <li key={product.id}  className='shopProd_item wow fadeInUp'>
        <div className="shopProd_box">
          <Link to={`/products/${product.id}`} className="shopProd_link" title={product.name}>  
              <div className="shopProd_img">
                  <figure className="shopProd_img_wrapper">
                      <img src={product.imgs} alt={product.name} />
                  </figure>
              </div>
              <div className="shopProd_detail">
                  <h4 className="title">{product.name}</h4>
              </div>
          </Link>                  
        </div>
      </li>
    );
  });
  return (
    <div>
      {productbox}
    </div>
  );
};

export default ProductBox;