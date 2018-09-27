import React, { Component } from "react";
import "./PageTeam.css";
import SideBar from "../components/sideBar";
import TeamBox from "../components/teamBox";

class PageTeam extends Component {
  state = {};
  render() {
    return (
      <div>
        <TeamBox />
      </div>
    );
  }
}

export default PageTeam;
