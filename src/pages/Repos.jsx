import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { RepoItems, Spinner, Pagination } from "../components";
import Repo from "./Repo";

function Repos() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(6);

  const location = useLocation();

  const url = process.env.REACT_APP_GITHUB_URL;
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetchRepo();
  }, []);

  const fetchRepo = async () => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 24,
    });
    const response = await fetch(`${url}/users/josephe44/repos?${params}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepos(data);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

  return (
    <>
      <div className="home">
        {location.pathname === "/repo-list" ? (
          <>
            <RepoItems repos={currentRepo} />
            <Pagination
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <Routes>
            <Route path="repo/:repoName" element={<Repo />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default Repos;
