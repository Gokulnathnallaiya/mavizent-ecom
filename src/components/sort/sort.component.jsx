import React from "react";
import "./sort.styles.css";
const SortComponent = () => {
  return (
    <div>
      <select className="sort-container" name="cars" id="cars">
        <option value="volvo">SORT BY PRICE</option>
        <option value="saab">POPULAR</option>
        <option value="opel">NEW</option>
        <option value="audi">HIGHEST RATED</option>
      </select>
    </div>
  );
};

export default SortComponent;
