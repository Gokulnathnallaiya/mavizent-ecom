import React from "react";
import "./orderItem.styles.css";
const OrderItem = ({ _id, others }) => {
  console.log(others);

  return (
    <div className="orderItem-container">
      <div className="image-container">
        <img
          className="orderItem-image"
          src={`https://b2b-backendd.herokuapp.com/products/${_id}/image`}
          alt="product title"
        />
      </div>
      <div className="order-details">
        <h4>{others.title}</h4>
        <div className="prices">
          <h4 className=" dis-price"> $ {others.disPrice}</h4>
          <h4 className="ori-price">$ {others.oriPrice}</h4>
        </div>
        
      </div>
    </div>
  );
};

export default OrderItem;
