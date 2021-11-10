import React from "react";
import { render } from "react-dom";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import App from "./App.jsx";

import "../index.css";

const defaultPath = "/";

render(
  <Router>
    <Switch>
      <Route exact path={defaultPath} component={App} />
      <Route path={`${defaultPath}cmd`} />
      <Redirect exact from="*" to={defaultPath} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
