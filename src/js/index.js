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

const BASE_PATH = "/";

render(
  <Router>
    <Switch>
      <Route exact path={BASE_PATH} component={App} />
      <Route path={`${BASE_PATH}cmd`} />
      <Redirect exact from="*" to={BASE_PATH} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
