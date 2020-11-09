import React from "react";
import Navbar from "./components/navbar/Navbar";
import Navbartwo from "./components/navbartwo/navbartwo";
import "./App.css";
import Home from "./pages/homePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage.component";
import SignupPage from "./pages/signupPage/signupPage.component";
import ProductDetailPage from "./pages/productDetailPage/productDetailPage.component";

import Services from "./pages/Services";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Consulting from "./pages/Consulting";

import Loader from "./components/loader/loader.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { isLoading } from "./reduxx/appUtils/app.selectors";

const App = ({Loading}) => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Navbartwo />
        <h1>{Loading}</h1>
  
  
        {Loading?<Loader/>:null}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/product/:id" component={ProductDetailPage}/>

          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/consulting" component={Consulting} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  Loading: isLoading,
});

export default connect(mapStateToProps, null)(App);
