import React from "react";
import Navbar from "./components/navbar/Navbar";
import Navbartwo from "./components/navbartwo/navbartwo";
import "./App.css";
import Home from "./pages/homePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage.component";

import Services from "./pages/Services";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Consulting from "./pages/Consulting";


const App=() => {
  

  return (
    <Router>
      <div className="App">
      <Navbar />
     

      <Navbartwo />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/marketing" component={LoginPage} />
        <Route path="/consulting" component={Consulting} />
      </Switch>
      </div>
    </Router>
  );
}



export default App;
