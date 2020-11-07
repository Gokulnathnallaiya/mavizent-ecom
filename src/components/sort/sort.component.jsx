import React from "react";
import "./sort.styles.css";
import { selectHomepageProducts} from "../../redux/products/product.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {setHomePageProducts} from "../../redux/products/product.actions";


const SortComponent = ({products,setProducts}) => {

  
  const handleProductsFilter = e => {
    let value = e.target.value;
    
    if (value==="lowtohigh"){
      const sortedArray = products.slice().sort((a,b)=>{
        return a.disPrice-b.disPrice
      })
      setProducts(sortedArray) 

    }
    else if (value==="hightolow"){
      const sortedArray = products.slice().sort((a,b)=>{
        return b.disPrice-a.disPrice
      })
      setProducts(sortedArray)

    }
    else if (value==="popular"){
      
      const sortedArray = products.slice().sort((a,b)=>{
        return b.stock-a.stock
      })
      setProducts(sortedArray)

    }
    

}
  return (
    <div>
      <select onChange={handleProductsFilter} className="sort-container" name="cars" id="cars">
        <option value="popular">POPULAR</option>
        <option value="lowtohigh">PRICE--LOW TO HIGH</option>
        <option value="hightolow">PRICE--HIGH TO LOW</option>
        <option value="new">NEWEST FIRST</option>
      </select>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products:selectHomepageProducts,
});
const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setHomePageProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortComponent);

