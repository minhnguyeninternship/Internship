import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="menu">
        <div className="rightmenu">
          <ul>
            <li id="firstlist">HOME</li>
            <li>SERVICES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>NEWS</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
