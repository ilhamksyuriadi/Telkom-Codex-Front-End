import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideBar from "./components/sideBar";
import PageProject from "./pages/PageProject";
import PageTeam from "./pages/PageTeam";
import PageCalendar from "./pages/PageCalendar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <SideBar />
          <Switch>
            <Route path="/" component={PageProject} exact />
            <Route path="/Team" component={PageTeam} />
            <Route path="/Calendar" component={PageCalendar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
