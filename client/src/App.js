import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Request from "./pages/Request";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/request" component={Request} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
