import React from "react";
import "./sort.styles.css";
const SortComponent = () => {
  return (
    <div>
      <select className="sort-container" name="cars" id="cars">
        <option value="volvo">SORT BY PRICE</option>
        <option value="saab">Saabssdfgsdfds</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default SortComponent;
