import React from "react";
import "./accountDetails.styles.css";
const AccountDetails = ({ currentUser }) => {
  console.log(currentUser.email);
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
        <p>No orders yet</p>
      </div>
    </>
  );
};

export default AccountDetails;
