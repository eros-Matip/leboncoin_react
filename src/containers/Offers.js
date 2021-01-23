import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

import Filters from "../components/Filters";

function Offers({ filter, setFilter }) {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  const limit = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/offer/with-count?page=${page}&limit=${limit}`
      );
      setData(response.data);
      setCount(response.data.count);
      setIsloading(false);
    };
    fetchData();
  }, [page]);

  return (
    <div className="page">
      {filter === false ? (
        <div className="orange"></div>
      ) : (
        <Filters setData={setData} />
      )}

      {isloading === true ? (
        <div className="anounce_page">
          <p className="charging">En cours de chargement ...</p>
        </div>
      ) : (
        <div className="anounce_page">
          <div>
            {data.anonces.map((offer) => {
              // DATE
              const numberOfDay = new Date(offer.created).getDate();
              const month = new Date(offer.created).getMonth();
              const year = new Date(offer.created).getFullYear();

              return (
                <Link key={offer._id} to={"/offer/" + offer._id}>
                  <div className="box">
                    <div>
                      <img
                        className="offers_img"
                        src={offer.file.secure_url}
                        alt="decription d'annonce"
                      ></img>
                    </div>
                    <div className="offers-description">
                      <div>
                        <h3>{offer.title} </h3>
                        <h3 className="price">{offer.price} €</h3>
                      </div>
                      <div className="anounce_date">
                        <p>{numberOfDay}/</p>
                        <p> {month + 1}/</p>
                        <p>{year}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <Pagination
              count={count}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Offers;
