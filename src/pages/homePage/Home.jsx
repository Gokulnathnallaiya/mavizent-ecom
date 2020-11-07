import React from 'react';
import './home.css';
import ProductList from "../../components/productList/productList.component";

export default function Home() {
  return (
    <>
      <div className="home-container">
        
        <ProductList/>
        
      </div>
    </>
  );
}
