import React from "react";

import "./productList.styles.css" ;
import ProductCard from "../productCard/card";
import axios from "axios";
class ProductList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            products:[],
            Loading:false,
        };
    }

    componentDidMount() {
        this.setState({ Loading: true });
        axios.get("https://b2b-backendd.herokuapp.com/products").then((res) => {
          this.setState({ products: res.data }, () => {
            console.log(this.state.products);
            this.setState({ Loading: false });
          });
        });
      }


    render(){
        return(
            <div className="card-list">

                {
                    this.state.products.map((item,index)=>{
                        return <ProductCard key={index } item={item}/>
                    })
                }



            </div>
        )
    }


}
export default ProductList;