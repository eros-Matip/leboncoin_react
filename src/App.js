import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Offers from "./containers/Offers";
import Offer from "./components/Offer";
import LogIn from "./containers/Login";
import SingUp from "./containers/SingUp";
import Header from "./containers/Header";
import Cookies from "js-cookie";
import Publish from "./containers/Publish";
import Footer from "./components/Footer";

function App() {
  const tokenFromCookie = Cookies.get("userToken");
  const [filter, setFilter] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [user, setUser] = useState(newState);

  return (
    <Router>
      <Header
        user={user}
        setUser={setUser}
        filter={filter}
        setFilter={setFilter}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <div className="bloc_anounce">
        <Switch>
          <Route path="/publish">
            <Publish />
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
            <Offers filter={filter} setFilter={setFilter} />
          </Route>
        </Switch>
      </div>
      <Footer application="ReactJS" from="Le Reacteur" name="Eros" />
    </Router>
  );
}

export default App;
