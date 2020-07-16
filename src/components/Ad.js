import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Title from "./Title";

const Ad = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/" + id
      );

      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, [id]);
  console.log("data :", data);
  return (
    <div>
      <Title />
      {isLoading === true ? (
        <p className="charging">Chargement en cours veuillez patienter ...</p>
      ) : (
        <div className="ad-page">
          <div className="all-box">
            <div className="ad-box">
              <img
                className="picture-description"
                alt={data.picture}
                src={data.picture.secure_url}
              ></img>
              <div className="decription">
                <div>
                  <h2>{data.title}</h2>
                  <h2>{data.price} €</h2>
                </div>
                <div>
                  <p>{data.created}</p>
                </div>
              </div>
            </div>
            <div className="creator">
              <h2>{data.creator.account.username}</h2>
              <p className="blue">2 Annonces en ligne</p>
              <hr />
              <button className="btn-buy">Acheter</button>
            </div>
          </div>
          <div className="ad-description container">
            <strong>Description:</strong>
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Ad;
