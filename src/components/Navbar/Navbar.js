import React, { Component } from "react";
import { MenuItems } from "./MenuItem";
import logo from "../../images/logo.jpg";
import "./Navbar.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <img src={logo} alt="" />
          </h1>
          <div className="menu-icon" onClick={this.handleclick}>
            <i
              className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
            
          </ul>
          
          
        </nav>
      </div>
    );
  }
}

export default Navbar;
