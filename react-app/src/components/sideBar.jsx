import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";
import Logo from "./logo.jpg";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="side-bar">
        <div className="box-row">
          <div className="box-column">
            <img className="logo" src={Logo} />
            <NavLink to="/">Project</NavLink>
            <NavLink to="/Team">Team Performance</NavLink>
            <NavLink to="/Calendar">Calendar</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
