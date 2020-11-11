import React from "react";
import "./accountDetails.styles.css";
import "../orderItem/orderItem.component";
import OrderItem from "../orderItem/orderItem.component";
const AccountDetails = ({ currentUser, orders }) => {
  console.log(currentUser);
  return (
    <>
      <div className="user-details">
        <h1 className="name">{currentUser.name}</h1>
        <h1 className="email">{currentUser.email}</h1>
      </div>
      <div className="address">
        <h3>Primary Address</h3>
        <p>No addresses saved</p>
      </div>
      <div className="order-history">
        <h3>Order History</h3>
        <div className="orders">
          {orders.map(({ product, ...otherProps }) => (
            <OrderItem _id={product} others={otherProps} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
