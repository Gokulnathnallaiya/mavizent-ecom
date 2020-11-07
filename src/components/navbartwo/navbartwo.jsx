import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import "./navbartwo.css";
import {navBarItems} from "./navbarItems";

function Navbartwo() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbartwo">
        <ul className="nav-menutwo">
          <li
            className="nav-itemtwo"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-linkstwo"
              onClick={closeMobileMenu}
            >
              COTTON{" "}
              <span className="arrow">
                {window.innerWidth > 960 ? (
                  dropdown ? (
                    <i className="fas  fa-angle-up" />
                  ) : (
                    <i className="fas arrow fa-angle-down" />
                  )
                ) : null}
              </span>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          {navBarItems.map((item,index)=>(

            <li key={index} className="nav-item">
              <Link to={item.path} className={item.cName}>
                {item.title}
              </Link>
            </li>

          ))}

        </ul>
      </nav>
    </>
  );
}

export default Navbartwo;
