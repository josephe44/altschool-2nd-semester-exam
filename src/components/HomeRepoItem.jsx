import React, { useContext } from "react";
import RepoContext from "../context/repos/RepoContext";

function HomeRepoItem() {
  const { currentRepo } = useContext(RepoContext);

  const repos = currentRepo.slice(0, 6);
  return (
    <div>
      <div className="repo-container">
        {repos.map((repo) => (
          <div key={repo.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeRepoItem;
