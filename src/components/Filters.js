import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function Filters({ data, setData }) {
  const [isloading, setIsloading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({});
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [sort, setSort] = useState("");
  const [more, setMore] = useState(false);

  const limit = 5;

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const params = {
      title: search,
      priceMin,
      priceMax,
      sort,
    };

    if (!priceMin) {
      delete params.priceMin;
    }
    if (!priceMax) {
      delete params.priceMax;
    }
    if (!sort) {
      delete params.sort;
    }

    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/offer/with-count?${queryString}`
    );
    setData(response.data);
  };

  const handlePriceMinChange = (event) => {
    setPriceMin(event.target.value);
  };
  const handlePriceMaxChange = (event) => {
    setPriceMax(event.target.value);
  };
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleMoreChange = () => {
    setMore(!more);
  };

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
      <form onSubmit={handleClick} className="filter">
        <div className="block-filter">
          <div>
            <input
              className="input-filter"
              onChange={handleSearchChange}
              placeholder="que recherchez vous ?"
            ></input>

            <button type="submit" className="btn-filter">
              Rechercher
            </button>
            <div>
              <p className="more-info">Afficher plus</p>
              <input
                onChange={handleMoreChange}
                type="checkbox"
                id="filters"
                name="filters"
              />
            </div>
          </div>
          <div>
            {more === true && (
              <div className="block_filters">
                <div className="div_filter">
                  <label htmlFor="priceMin">price min</label>
                  <input
                    id="priceMin"
                    className="input-number"
                    type="number"
                    onChange={handlePriceMinChange}
                  ></input>
                  €
                </div>
                <div className="div_filter">
                  <label htmlFor="priceMax">price Max</label>
                  <input
                    id="priceMax"
                    className="input-number"
                    type="number"
                    onChange={handlePriceMaxChange}
                  ></input>
                  €
                </div>

                <div className="div_filter">
                  <label htmlFor="sort">Sort</label>
                  <select onChange={handleSortChange}>
                    <option value="price-desc">Price Desc</option>
                    <option value="price-asc">Price Asc</option>
                    <option value="date-desc">Date Desc</option>
                    <option value="date-desc">Date Asc</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Filters;
