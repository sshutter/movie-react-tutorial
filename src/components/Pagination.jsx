import React from "react";

const Pagination = ({ page, setPage, totalPages = 500 }) => {
  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  const isActive = (p) => (p === page ? "active" : "");

  let start = Math.max(1, page - 2);
  let end = start + 4;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - 4);
  }

  const pages = [];
  for (let p = start; p <= end; p++) {
    pages.push(p);
  }

  return (
    <div className="w-full d-flex justify-content-center my-4">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setPage(1)}
              disabled={page <= 1}
            >
              &laquo;
            </button>
          </li>

          {pages.map((p) => (
            <li key={p} className={`page-item ${isActive(p)}`}>
              <button
                className="page-link"
                onClick={() => goToPage(p)}
                disabled={p === page}
              >
                {p}
              </button>
            </li>
          ))}

          <li className={`page-item ${page >= totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setPage(totalPages)}
              disabled={page >= totalPages}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
