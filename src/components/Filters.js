import React, { useState } from "react";
import axios from "axios";

function Filters({ setData }) {
  const [search, setSearch] = useState({});
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [sort, setSort] = useState("");
  const [more, setMore] = useState(false);

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

  return (
    <div className="page">
      <div className="orange"></div>
      <form onSubmit={handleClick} className="filter">
        <div className="block-filter">
          <div className="box_filters">
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
          <div className="box_filters">
            {more === true && (
              <div className="block_sort">
                <p>Prix entre</p>
                <div className="div_filter">
                  <label htmlFor="priceMin" />

                  <input
                    id="priceMin"
                    className="input-number"
                    type="number"
                    onChange={handlePriceMinChange}
                    placeholder="prix min"
                  ></input>
                </div>
                <p>et</p>
                <div className="div_filter">
                  <label htmlFor="priceMax" />
                  <input
                    id="priceMax"
                    className="input-number"
                    type="number"
                    placeholder="prix max"
                    onChange={handlePriceMaxChange}
                  ></input>
                </div>

                <div>
                  <label htmlFor="sort"></label>
                  <select onChange={handleSortChange} className="sort">
                    <option value="price-desc">Du prix le plus grand</option>
                    <option value="price-asc">Du prix le plus petit</option>
                    <option value="date-desc">Le moins ancien</option>
                    <option value="date-desc">Le plus ancien</option>
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
