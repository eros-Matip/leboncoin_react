import React from "react";
import logo from "../pictures/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="headerBand">
      <div className="header container">
        <div className="left">
          <Link to="/">
            <img className="logo" alt="leboncoin" src={logo}></img>
          </Link>
          <button className="btn-plus">
            <i className="far fa-plus-square"></i> Déposer une annonce
          </button>
          <button className="btn-search">
            <i className="fas fa-search"></i>Rechercher
          </button>
        </div>
        <Link to="/user/log_in">
          <div className="right">
            <button className="profil">
              <i className="far fa-user"></i>
              <br />
              Se connecter
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Title;
