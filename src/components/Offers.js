import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import { Link } from "react-router-dom";

function Offers() {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/with-count"
      );
      setData(response.data);
      setIsloading(false);
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="page">
      <Title />
      <div className="orange"></div>

      {isloading === true ? (
        <p className="charging">En cours de chargement ...</p>
      ) : (
        <div>
          {data.offers.map((offer, index) => {
            const dateString = Date(offer.created).toString();
            console.log("dateString :", dateString);

            return (
              <Link key={offer._id} to={"/offer/" + offer._id}>
                <div className="box">
                  <div>
                    <img
                      className="offers"
                      src={offer.picture.secure_url}
                      alt="decription d'annonce"
                    ></img>
                  </div>
                  <div className="offers-description">
                    <div>
                      <h3>{offer.title} </h3>
                      <h3 className="price">{offer.price} €</h3>
                    </div>
                    <div>
                      <p>{dateString}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Offers;
