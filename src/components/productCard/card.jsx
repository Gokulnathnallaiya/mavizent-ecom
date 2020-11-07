import React from "react";
import "./card.styles.css";

const ProductCard = ({ item }) => {
  const { title, disPrice, oriPrice, _id } = item;

  return (
    <div className="card-container">
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
export default ProductCard;
