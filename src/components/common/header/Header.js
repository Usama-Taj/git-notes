import React, { Component } from "react";
import logo from "assets/logos/logo.svg";
import {
  HeaderArea,
  NavBar,
  NavBarLogo,
  NavBarControls,
} from "./Header.styles";

class Header extends Component {
  render() {
    return (
      <>
        <HeaderArea>
          <NavBar>
            <a href="#">
              <NavBarLogo src={logo} alt="Emumba Logo" />
            </a>
            <NavBarControls>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Name..."
              />
              <button>Login</button>
            </NavBarControls>
          </NavBar>
        </HeaderArea>
        <div className="under-header"></div>
      </>
    );
  }
}

export default Header;
