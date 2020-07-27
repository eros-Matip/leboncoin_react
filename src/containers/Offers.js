import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

function Offers({ page, setPage }) {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState({});

  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/offer/with-count?page=${page}&limit=${limit}`
      );
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, [page]);

  return (
    <div className="page">
      <div className="orange"></div>

      {isloading === true ? (
        <p className="charging">En cours de chargement ...</p>
      ) : (
        <div>
          {data.anoncesFilters.map((offer) => {
            const dateString = new Date(offer.created).toString();
            return (
              <Link key={offer._id} to={"/offer/" + offer._id}>
                <div className="box">
                  <div>
                    <img
                      className="offers"
                      src={offer.file.secure_url}
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
      <Pagination count={data.count} limit={limit} setPage={setPage} />
    </div>
  );
}
export default Offers;
