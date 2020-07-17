import React, { useState } from "react";
import Title from "./Title";
import axios from "axios";
import { Link } from "react-router-dom";

const Log_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/user/log_in",
      { email: email, password: password }
    );
    setData(response.data);
  };
  console.log(data);

  return (
    <>
      <div>
        <Title />
        <div>...abs</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handlePassword}
          />
          <button type="submit">Se connecter</button>
          <hr />
          <div>
            <strong>Vous n'avez pas de compte ?</strong>
            <Link to="/user/create">
              <button>Créer un compte</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Log_in;
