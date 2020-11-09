import React from "react";

import ProductDetail from "../../components/productDetail/productDetail.component";
import axios from "axios";
class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id:this.props.match.params.id
    };
    
  }

  

  render() {
    return (
      <div>
        
        <ProductDetail id={this.state.id}/>
      </div>
    );
  }
}

export default ProductDetailPage;
