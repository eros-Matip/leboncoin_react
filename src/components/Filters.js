import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function Filters() {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [result, setResult] = useState({});

  const limit = 5;

  const handleChange = (event) => {
    setResult(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/with-count?page=${page}&limit=${limit}`
      );
      setData(response.data);
      setIsloading(false);
    };

    fetchData();
  }, [page]);

  return (
    <div className="page">
      <div className="orange"></div>
      <form onClick={handleClick} className="filter">
        <div className="block-filter">
          <input
            className="input-filter"
            onChange={handleChange}
            placeholder="que recherchez vous ?"
          ></input>
          <button className="btn-filter">Rechercher</button>
        </div>
      </form>

      {isloading === true ? (
        <p className="charging">En cours de chargement ...</p>
      ) : (
        <div>
          {data.offers.map((offer) => {
            const dateString = Date(offer.created).toString();

            return (
              <div>
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
              </div>
            );
          })}
          <Pagination count={data.count} limit={limit} setPage={setPage} />
        </div>
      )}
    </div>
  );
}
export default Filters;
