import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/1.png";

import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active ">
            <NavLink className="nav-link nav-link0" to="/urdu">
              Urdu <span className="sr-only"></span>
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link nav-link2 frommarginleft" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    }else {
      return(
        <>
           <li className="nav-item active ">
            <NavLink className="nav-link nav-link0" to="/urdu">
              Urdu <span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-link1" to="/signin">
              Signin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-link2" to="/signup">
              Signup
            </NavLink>
          </li>
        </>
      )
    }
  };

  return (
    <>
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar0">
        <h5 className="navbar-brand">
          <img src={logo} alt="logo" />
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">

            <RenderMenu />
          </ul>
        </div>
      </nav>

      {/* Second Navbar */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark navbar1 formargin">
          <a href = '###' className="navbar-brand p-2">Kissan Dost | </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link hovercolor"  to="/">
                  Home <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href ='#######'
                >
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/inspesrates">
                    Insecticides and Pesticides Rates
                  </NavLink>
                  <NavLink className="dropdown-item" to="/cropsrates">
                    Crops Rates
                  </NavLink><NavLink className="dropdown-item" to="/seedsrates">
                    Seeds Rates
                  </NavLink><NavLink className="dropdown-item" to="/fertilizerrates">
                    Fertilizer Rates
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/crops">
                  Crops
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href='###'
                >
                  Users
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/my-contacts">
                    Find People
                  </NavLink>
                  <NavLink className="dropdown-item" to="/my-profile">
                    Profile Setting
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href='###'
                >
                  Advices
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/createpost">
                    Create Post
                  </NavLink>
                  <NavLink className="dropdown-item" to="/allpost">
                    All Posts
                  </NavLink>
                </div>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
