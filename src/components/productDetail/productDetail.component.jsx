import React from "react";
import "./productDetail.styles.css";
import axios from "axios";
class ProductDetail extends React.Component {

    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
        }
    }
  componentDidMount() {
    axios
      .get(`https://b2b-backendd.herokuapp.com/products/${this.state.id}`)
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="productdetail-container">
        <div className="imagecontainer">
          <img
            className="product-image"
            src={`https://b2b-backendd.herokuapp.com/products/${this.state.id}/image`}
            alt="product title"
          />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
