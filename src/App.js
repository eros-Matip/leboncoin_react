import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Offers from "./containers/Offers";
import Offer from "./components/Offer";
import LogIn from "./containers/Login";
import SingUp from "./containers/SingUp";
import Header from "./containers/Header";
import Filters from "./components/Filters";
import Cookies from "js-cookie";
import Publish from "./containers/Publish";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }
  const limit = 4;

  const [user, setUser] = useState(newState);
  const [page, setPage] = useState(1);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/publish">
          <Publish />
        </Route>
        <Route path="/offer/whith-count">
          <Filters />
        </Route>
        <Route path="/sign_up">
          <SingUp setUser={setUser} />
        </Route>
        <Route path="/log_in">
          <LogIn user={user} setUser={setUser} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Offers page={page} setPage={setPage} limit={limit} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
