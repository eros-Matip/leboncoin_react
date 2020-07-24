import React from "react";

function Pagination({ count, limit, setPage }) {
  const buttonPage = count / limit;

  const buttons = [];

  for (let index = 1; index <= buttonPage; index++) {
    buttons.push(
      <button key={index} onClick={() => setPage(index)}>
        {index}
      </button>
    );
  }
  const handleClickIncrement = () => {
    setPage();
  };

  const handleClickDecrement = () => {
    setPage(0);
  };

  return (
    <>
      <div className="btn-page">
        <button onClick={handleClickDecrement}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div>{buttons}</div>
        <button onClick={handleClickIncrement}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default Pagination;
