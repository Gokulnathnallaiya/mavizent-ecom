import React from "react";
import "./productPreview.styles.css";
import axios from "axios";
import Button from "../../components/button/Button";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../reduxx/user/user.selectors";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";

toast.configure();
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      product: [{}],
    };
  }
  componentWillMount() {
    axios
      .get(`https://b2b-backendd.herokuapp.com/products/${this.state.id}`)
      .then((res) => {
        this.setState({ product: res.data.product }, () =>
          console.log(this.state)
        );
      });
  }

  buyNow = () => {
    
    const { title, disPrice, oriPrice } = this.state.product[0];


    axios
      .post(
        `https://b2b-backendd.herokuapp.com/user/${this.props.currentUser._id}/neworder`,
        {
          product: this.state.id,
          title:title,
          disPrice:disPrice,
          oriPrice:oriPrice,
          qty: 1,
          Date: new Date(),
        }
      )
      .then((res) => {
        console.log(res);
        
        toast(res.data.message, { type: "success" });
      })
      .catch((err) => {
        toast("Error occured", { type: "error" });
       
        console.log(err);
      });
  };

  render() {
    const { title, disPrice, oriPrice, description } = this.state.product[0];
    console.log(title);
    return (
      <div className="productdetail-container">
        <div className="imagecontainer">
          <img
            className="product-image"
            src={`https://b2b-backendd.herokuapp.com/products/${this.state.id}/image`}
            alt="product title"
          />
        </div>
        <div className="description-container">
          <div className="description1">
            <h3 className="preview-title">{title}</h3>
            <div className="prices">
              <h4 className="preview-disPrice">$ {disPrice}</h4>
              <h4 className="preview-oriPrice">$ {oriPrice}</h4>
              <div className="buynow">
                <Button onClick={this.buyNow}>BUY NOW</Button>
              </div>
            </div>
          </div>
          <div className="description2">
            <h3>About Product</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
});


export default connect(mapStateToProps, null)(ProductDetail);
