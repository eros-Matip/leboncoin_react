import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const LogIn = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

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
    const responseToken = response.data.token;
    const responseUsername = response.data.account;

    Cookies.set("userToken", responseToken, { expires: 2000 });
    Cookies.set("username", responseUsername, { expires: 2000 });
    setUser(responseToken);

    history.push("/");
  };

  return (
    <>
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
                autoComplete="off"
                value={password}
                onChange={handlePassword}
              />
            </div>
            {handleEmail === " " ? <p>please, enter your mail ...</p> : null}

            <button className="colorBlue" type="submit">
              Connexion
            </button>

            <hr />
            <div className="blockCreate">
              <strong>Vous n'avez pas de compte ?</strong>

              <Link to="/sign_up">
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
