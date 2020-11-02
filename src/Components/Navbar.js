import React, { Component } from "react";
import logo from "../logo.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand ml-3" href="#">
          <img src={logo} alt="My logo" style={{ width: "33px" }} />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-lg-0">
            <input
              className="form-control mr-sm-3"
              type="search"
              placeholder="Search or jump to..."
              aria-label="Search"
            />
          </form>

          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pull requests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Issues
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Marketplace
              </a>
            </li>
            <li className="nav-item mr-auto">
              <a className="nav-link text-white" href="#">
                Explore
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                &nbsp;<i className="far fa-bell fa-lg"></i>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                &nbsp;<i className="fas fa-plus fa-lg"></i>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                &nbsp;<i className="far fa-user-circle fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
