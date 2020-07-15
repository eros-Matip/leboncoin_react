import React from "react";
import logo from "../pictures/logo.png";

const Title = () => {
  return (
    <>
      <div className="header container">
        <div className="left">
          <img className="logo" alt="leboncoin" src={logo}></img>
          <button className="btn-plus">
            <i className="far fa-plus-square"></i> Déposer une annonce
          </button>
          <button className="btn-search">
            <i className="fas fa-search"></i>Rechercher
          </button>
        </div>
        <div className="right">
          <button className="profil">
            <i className="far fa-user"></i>
            <br />
            Se connecter
          </button>
        </div>
      </div>
    </>
  );
};

export default Title;
