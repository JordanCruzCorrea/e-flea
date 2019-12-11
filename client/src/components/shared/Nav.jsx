import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Nav.css";







export default function Nav() {
  return (
    <div className="header">
      <div className="nav-container">
        <div className="nav-home">
          <NavLink className="nav navlink-home" to="/" activeClassName=''>
            E•Flea
          </NavLink>
        </div>
        <div className="nav-always">
          <div className="nav-about">
            <NavLink className="nav" activeClassName="active" to="/about">
              About
            </NavLink>
          </div>
          <div className='nav-search'>
            <NavLink className='nav' to="/search">Search</NavLink>
          </div>
          <div className="nav-sellnow">
            <NavLink className="nav" activeClassName="active" to="/create-item">
              Sell Now
            </NavLink>
            <div className='nav-login-signup'>
              <div className="nav-signin">
                <NavLink className="nav" activeClassName="active" to="/sign-in">
                  Log In
          </NavLink>
              </div>
              <div className="nav-signup">
                <NavLink className="nav" activeClassName="active" to="/sign-up">
                  Sign Up
          </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
