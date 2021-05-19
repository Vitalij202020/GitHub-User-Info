import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import EmptyRepo from './EmptyRepo/EmptyRepo';
import './Repo.css';

const Repo = ({ repo }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [startCount, setStartCount] = useState(1);
  const [endCount, setEndCount] = useState(repo.length < 4 ? repo.length : 4);

  const repoPerPage = 4;
  const pagesVisited = pageNumber * repoPerPage;
  const pageCount = Math.ceil(repo.length / repoPerPage);

  const changePage = ({ selected }) => {
    let start = (selected + 1 - 1) * repoPerPage + 1;
    let end = (selected + 1) * repoPerPage;
    if (selected + 1 === pageCount) end = repo.length;
    setStartCount(start);
    setEndCount(end);
    setPageNumber(selected);
  };

  return (
    <div className="repo">
      {repo.length === 0 ? (
        <EmptyRepo />
      ) : (
        <>
          <h1>Repositories ({repo.length})</h1>
          {repo.slice(pagesVisited, pagesVisited + repoPerPage).map((item) => (
            <div key={item.id} className="card">
              <div className="card--inner">
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="pageCount">
            <div>
              <p>
                {startCount} - {endCount} of {repo.length} items
              </p>
            </div>
            <div>
              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBtn'}
                previousLinkClassName={'previousBtn'}
                nextLinkClassName={'nextBtn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Repo;
