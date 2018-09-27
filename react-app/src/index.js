import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SideBar from "./components/sideBar";
import PageProject from "./pages/PageProject";
import PageTeam from "./pages/PageTeam";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
