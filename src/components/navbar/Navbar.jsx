import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../reduxx/user/user.selectors";

function Navbar({ currentUser }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  console.log(currentUser);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          MAVIZENT
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PRODUCTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </li>
          <li className="nav-item">
            {window.innerWidth>960?<i className="fas  fa-user-alt" />:null}
            {currentUser === "" ? (
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >Login</Link>
            ) : (
              <Link
                to="/loginn"//to be ediited
                className="nav-links"
                onClick={closeMobileMenu}
              >My Account</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, null)(Navbar);
