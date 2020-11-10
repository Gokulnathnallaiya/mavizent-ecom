import React from "react";

import ProductPreview from "../../components/productPreview/productPreview.component";
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
      <div >
        
        <ProductPreview id={this.state.id}/>
      </div>
    );
  }
}

export default ProductDetailPage;
