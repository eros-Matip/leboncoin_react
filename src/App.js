import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Offers from "./containers/Offers";
import Annonces from "./components/Annonces";
import LogIn from "./containers/Login";
import SingUp from "./containers/SingUp";
import Title from "./containers/Title";
import Filters from "./components/Filters";
import Cookies from "js-cookie";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }
  const [user, setUser] = useState(newState);

  console.log("tokenFromCookie->", tokenFromCookie);

  return (
    <Router>
      <Title user={user} setUser={setUser} />
      <Switch>
        <Route path="/offer/whith-count">
          <Filters />
        </Route>
        <Route path="/sign_up">
          <SingUp />
        </Route>
        <Route path="/log_in">
          <LogIn user={user} setUser={setUser} />
        </Route>
        <Route path="/offer/:id">
          <Annonces />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
