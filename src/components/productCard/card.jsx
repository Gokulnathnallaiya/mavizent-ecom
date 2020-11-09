import React from "react";
import "./card.styles.css";

import { withRouter } from "react-router-dom"

const ProductCard = ({ item, history }) => {
  const { title, disPrice, oriPrice, _id } = item;
 

  const handleClick =()=> {
    history.push({pathname:`/product/${_id}`})
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <div className="image-container">
        <img
          className="image"
          src={`https://b2b-backendd.herokuapp.com/products/${_id}/image`}
          alt="product title"
        />
      </div>

      <div class="container">
        <p className="title">{title}</p>
        <div className="price">
          <p className="dis-price">$ {disPrice}</p>
          <p className="ori-price">$ {oriPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default  withRouter(ProductCard);
