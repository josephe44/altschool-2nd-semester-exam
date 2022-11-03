import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function Repo() {
  const { repoName } = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "https://api.github.com";
  const token = "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";

  useEffect(() => {
    fetchRepo();
  }, [repoName]);

  // fetch single repo
  const fetchRepo = async () => {
    const response = await fetch(`${url}/repos/josephe44/${repoName}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepo(data);
    setLoading(false);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="eachRepo-container">
      <div>
        <Link to="/">
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
            <div className="eachRepo-visit">
              <button className="visit-button">
                <a target="_blank" rel="noreferrer" href={repo.html_url}>
                  view on github
                </a>
              </button>
            </div>
          </div>
          <p>{repo.description}</p>
          <div className="banner-grid">
            <p className="eachRepo-banner">
              Type: {repo.owner.type ? repo.owner.type : "none"}
            </p>
            <p className="eachRepo-banner">Owner: {repo.owner.login}</p>
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
