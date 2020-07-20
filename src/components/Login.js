import React, { useState } from "react";
import Title from "./Title";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const LogIn = () => {
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
    alert("Votre cookie a été stocké avec succès");
  };
  const token = data.token;
  Cookies.set("token", token, { expires: 15 });

  const cookie = Cookies.get("token");
  console.log(cookie);
  return (
    <>
      <Title />
      <div className="pageLogIn">
        <div className="blockLog ">
          <h3 className="h3LogIn">Connexion</h3>
          <hr className="hrLogIn" />

          <form onSubmit={handleSubmit} className="formLogIn">
            <div className="blockInput">
              <strong className="strongLogIn">Adresse email</strong>
              <input
                className="inputLogIn"
                type="text"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="blockInput">
              <strong className="strongLogIn">Mot de Passe</strong>
              <input
                className="inputLogIn"
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <Link
              to={
                handleEmail || handlePassword !== ""
                  ? "/"
                  : alert("parameters missing")
              }
            >
              <button className="colorBlue" type="submit">
                Se connecter
              </button>
            </Link>

            <hr />
            <div className="blockCreate">
              <strong>Vous n'avez pas de compte ?</strong>
              <Link to="/user/create">
                <button className="backgroudBlue">Créer un compte</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LogIn;
