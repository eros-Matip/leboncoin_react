import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Offers from "./components/Offers";
import Ad from "./components/Ad";
import Log_in from "./components/Log_in";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/log_in">
          <Log_in />
        </Route>
        <Route path="/offer/:id">
          <Ad />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
