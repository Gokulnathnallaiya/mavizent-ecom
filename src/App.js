import React from "react";
import Navbar from "./components/navbar/Navbar";
import Navbartwo from "./components/navbartwo/navbartwo";
import "./App.css";
import Home from "./pages/homePage/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage.component";
import SignupPage from "./pages/signupPage/signupPage.component";
import ProductDetailPage from "./pages/productPreviewPage/productPreviewPage.component";
import AccountDetailsPage from "./pages/accountDetailsPage/accountDetailsPage.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./reduxx/user/user.selectors";

const App = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Navbartwo />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/signup"
            exact
            render={() =>
              currentUser ? <Redirect to="/myaccount" /> : <SignupPage />
            }
          />
          <Route
            path="/login"
            exact
            render={() =>
              currentUser ? <Redirect to="/myaccount" /> : <LoginPage />
            }
          />
          <Route path="/product/:id" exact component={ProductDetailPage} />
          <Route
            path="/myaccount"
            exact
            render={() =>
              currentUser ? <AccountDetailsPage /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
});

export default connect(mapStateToProps, null)(App);
