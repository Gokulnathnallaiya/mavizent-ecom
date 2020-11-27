import React from "react";
import "./productList.styles.css" ;
import ProductCard from "../productCard/card";
import axios from "axios";
import { selectHomepageProducts} from "../../reduxx/products/product.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {setHomePageProducts} from "../../reduxx/products/product.actions";


class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            
            
        };
    }

    

    componentDidMount() {
        const {setProducts} = this.props;
       
        axios.get("https://b2b-backendd.herokuapp.com/products").then((res) => {
          setProducts(res.data)
          
        });
      }


    render(){
        const {products}=this.props;
        return(
            <div className="card-list">
                

                {
                    products.map((item,index)=>{
                        return <ProductCard key={index } item={item}/>
                    })
                }



            </div>
        )
    }


}
const mapStateToProps = createStructuredSelector({
    products:selectHomepageProducts,
  });
  
const mapDispatchToProps = (dispatch) => ({
    setProducts: (products) => dispatch(setHomePageProducts(products)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
