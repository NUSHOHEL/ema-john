import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
    
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>Price : ${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock-Order Soon</small>
        </p>
        <button onClick={()=>props.handleAddProduct(props.product)} >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>
      </div>
    </div>
  );
};

export default Product;
