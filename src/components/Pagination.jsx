import React, { useState, useEffect, useContext } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import RepoContext from "../context/repos/RepoContext";

function Pagination() {
  const { numberOfPages, currentPage, setCurrentPage } =
    useContext(RepoContext);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);

  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }

    if (currentPage === numberOfPages) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [currentPage, numberOfPages]);
  return (
    <>
      <section>
        <ul className="pagination">
          <li>
            <button
              className={disabledPrev ? "disable-btn" : "page-link"}
              onClick={prevPage}
            >
              <FaAngleDoubleLeft />
            </button>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li key={pgNumber}>
              <button
                onClick={() => setCurrentPage(pgNumber)}
                className="page-link"
              >
                {pgNumber}
              </button>
            </li>
          ))}
          <li>
            <button
              className={disabledNext ? "disable-btn" : "page-link"}
              onClick={nextPage}
            >
              <FaAngleDoubleRight />
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Pagination;
