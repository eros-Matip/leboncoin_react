import React from "react";

function Pagination({ count, limit, page, setPage }) {
  const buttonPage = Math.round(count / limit + 1);
  const buttons = [];

  for (let i = 1; i <= buttonPage; i++) {
    buttons.push(
      <button
        className={i === page ? "btn-page-selected" : "btn-page"}
        key={i}
        onClick={() => setPage(i)}
      >
        {i}
      </button>
    );
  }
  const handleClickIncrement = () => {
    setPage(page + 1);
  };

  const handleClickDecrement = () => {
    setPage(page - 1);
  };

  return (
    <div className="pagination-btn">
      {page !== 1 && (
        <button onClick={handleClickDecrement} className="btn_border_none">
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      <div className="all_btn_page">{buttons}</div>
      {page !== buttonPage && (
        <button onClick={handleClickIncrement} className="btn_border_none">
          <i className="fas fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
}

export default Pagination;
