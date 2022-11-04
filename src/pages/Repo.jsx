import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Spinner } from "../components";
import RepoContext from "../context/repos/RepoContext";

function Repo() {
  const { loading, repo, fetchRepo } = useContext(RepoContext);
  const { repoName } = useParams();

  useEffect(() => {
    fetchRepo(repoName);
  }, [repoName]);

  if (loading) return <Spinner />;

  return (
    <div className="eachRepo-container">
      <div>
        <Link to="/repo-list">
          <button className="back-btn">
            <FaAngleDoubleLeft />
            <span> Back</span>
          </button>
        </Link>
      </div>
      <div className="eachRepo-card">
        <div className="eachRepo-item">
          <div>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="eachRepo-visit">
              <button className="visit-button">
                <a target="_blank" rel="noreferrer" href={repo.html_url}>
                  view on github
                </a>
              </button>
            </div>
          </div>
          <div className="banner-grid">
            <p className="eachRepo-banner">Fork: {repo.forks_count}</p>
            <p className="eachRepo-banner">
              Language: {repo.language ? repo.language : "none"}
            </p>
            <p className="eachRepo-banner">File Size: {repo.size}kb</p>
            <p className="eachRepo-banner">Visibility : {repo.visibility}</p>
            <p className="eachRepo-banner">Watchers : {repo.watchers}</p>
            <p className="eachRepo-banner">Open Issues : {repo.open_issues}</p>
            <p className="eachRepo-banner">
              Network Count : {repo?.network_count}
            </p>
            {repo?.parent?.default_branch ? (
              <p className="eachRepo-banner">
                Branch : {repo?.parent.default_branch}
              </p>
            ) : null}

            {repo?.license?.name ? (
              <p className="eachRepo-banner">License: {repo.license.name}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repo;
