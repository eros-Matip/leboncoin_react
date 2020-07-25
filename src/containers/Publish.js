import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function OfferPublish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();

  const history = useHistory();

  const token = Cookies.get("userToken");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("file", file);

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/offer/publish",
      formData,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    history.push("/");
    response();
  };

  const handleChangePicture = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <form onSubmit={handleButtonClick} type="submit" className="page-publish">
      <div className="bloc-publish">
        <div>
          <h2 className="h2-publish">Déposer une annonce </h2>

          <hr />
        </div>
        <div>
          <strong>Titre de l'annonce *</strong>
          <input onChange={handleTitleChange}></input>
        </div>

        <div>
          <strong>Texte de l'annonce *</strong>
          <input onChange={handleTextChange}></input>
        </div>
        <div>
          <strong>Prix *</strong>
          <input onChange={handlePriceChange}></input>€
        </div>
        <div>
          <strong>Photo *</strong>
          <input
            type="file"
            placeholder="choose file"
            onChange={handleChangePicture}
          ></input>
        </div>
        <button>Valider</button>
      </div>
    </form>
  );
}
export default OfferPublish;
