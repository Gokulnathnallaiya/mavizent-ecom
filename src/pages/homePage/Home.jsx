import React from 'react';
import './home.css';
import ProductList from "../../components/productList/productList.component";
import SortComponent from "../../components/sort/sort.component";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="sort-component">
        <SortComponent/>

        </div>
        
        <ProductList/>
        
      </div>
    </>
  );
}
