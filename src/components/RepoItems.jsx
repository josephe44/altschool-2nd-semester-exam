import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
function RepoItems({ repos, numberOfPages, currentPage, setCurrentPage }) {
  return (
    <div>
      <div className="repo-container">
        {repos.map((repo) => (
          <div key={repo.id}>
            <Link to={`repo/${repo.name}`}>
              <div className="repo-card">
                <div className="repo-flex">
                  <div className="repo-header">
                    <h4>{repo.name}</h4>
                    <div className="repo-avatar">
                      <img src={repo.owner.avatar_url} alt="avatar" />
                    </div>
                  </div>
                  <p className="desc">{repo.description}</p>

                  <div className="repo-desc">
                    <p>{repo.owner.login}</p>
                    <p>{repo.language ? repo.language : ""}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default RepoItems;
