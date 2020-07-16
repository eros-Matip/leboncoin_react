import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Offers from "./components/Offers";
import Ad from "./components/Ad";

function App() {
  return (
    <Router>
      <Switch>
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
