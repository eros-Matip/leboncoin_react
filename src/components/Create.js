import React, { useState } from "react";
import Title from "./Title";
import axios from "axios";

const Create = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handlePseudo = (event) => {
    setPseudo(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/user/sign_up",
      {
        pseudo: pseudo,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      }
    );
    console.log(response.data);
  };

  return (
    <div>
      <Title />
      <div className="block">
        <div className="all-create container">
          <div className="info-create">
            <h2 className="titleCreate">Pourquoi créer un compte ?</h2>
            <ul>
              <li>
                <h3>Gangez du temps</h3>
                <p>
                  Publiez vos annonces rapidement, avec vos informations
                  pré-remplies chaque fois que vous souhaitez déposer une
                  nouvelle annonce.
                </p>
              </li>
              <li>
                <h3>Soyez les premiers informés</h3>
                <p>
                  Créez des alertes Immo ou Emploi et ne manquez jamais
                  l'annonce que vous intréresse.
                </p>
              </li>
              <li>
                <h3>Visibilité</h3>
                <p>
                  Suivez les statistiques de vos annonces (nombre de fois où
                  votre annonce a été vue, nombre de contacts reçus)
                </p>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="create">
            <h2 className="titleCreate">Créez un compte</h2>
            <hr />
            <strong>Pseudo *</strong>
            <input
              type="text"
              name="pseudo"
              value={pseudo}
              onChange={handlePseudo}
            />
            <strong>Adresse email *</strong>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />

            <strong>Mot de passe *</strong>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <strong>Confirmer le mot de passe *</strong>
            <input
              type="password"
              name="confirmPassword"
              value={passwordConfirm}
              onChange={handlePasswordConfirm}
            />
            <div>
              <input
                type="checkbox"
                id="conditionsGenerales"
                name="conditionsGenerales"
              />
              <label>
                J'accepte les{" "}
                <p className="blue">Conditions Générales de Vente</p> et les{" "}
                <p className="blue">Conditions Générales d'utilisation</p>
              </label>
            </div>
            <button>Créer mon Compte Personnel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
