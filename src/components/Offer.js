import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/offer/${id}`
      );
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {isLoading === true ? (
        <p className="charging">Chargement en cours veuillez patienter ...</p>
      ) : (
        <div>
          {data.map((info) => {
            return (
              <div className="annonces-page">
                <div className="all-box">
                  <div className="annonces-box">
                    <img
                      className="picture-description"
                      alt={info.file}
                      src={info.file.secure_url}
                    ></img>
                    <div className="decription">
                      <div>
                        <h2>{info.title}</h2>
                        <h2>{info.price} €</h2>
                      </div>
                      <div>
                        <p>{info.created}</p>
                      </div>
                    </div>
                  </div>
                  <div className="creator">
                    <h2>{info.creator.account.username}</h2>
                    <p className="blue">2 Annonces en ligne</p>
                    <hr />
                    <button className="btn-buy">Acheter</button>
                  </div>
                </div>
                <div className="annonce-description container">
                  <strong>Description:</strong>
                  <p>{info.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Offer;
