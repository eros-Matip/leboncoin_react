import React from "react";
import logo from "../pictures/logo.png";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Title({ user, setUser }) {
  const history = useHistory();
  const token = Cookies.get("userToken");

  return (
    <div className="headerBand">
      <div className="header container">
        <div className="left">
          <Link to="/">
            <img className="logo" alt="leboncoin" src={logo}></img>
          </Link>
          <Link to={token !== undefined ? "/publish" : "/log_in"}>
            <button className="btn-plus">
              <i className="far fa-plus-square"></i> Déposer une annonce
            </button>
          </Link>
          <Link to="/offer/whith-count">
            <button className="btn-search">
              <i className="fas fa-search"></i>Rechercher
            </button>
          </Link>
        </div>

        {user === null ? (
          <div>
            <button>
              <Link to="/log_in">Se Connecter</Link>
            </button>
          </div>
        ) : (
          <div className="right">
            <button
              className={"profil"}
              type="submit"
              onClick={() => {
                Cookies.remove("userToken");
                Cookies.remove("username");
                Cookies.remove("tokenSignUp");
                Cookies.remove("token");
                setUser(null);
                history.push("/");
              }}
            >
              <i className="far fa-user"></i>
              <br />
              <p className="btn-connecting">Se Déconnecter</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Title;