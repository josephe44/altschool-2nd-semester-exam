import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { UserProfile, Spinner, HomeRepoItem } from "../components";

function Home() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(6);

  const location = useLocation();

  const url = process.env.REACT_APP_GITHUB_URL;
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetchUser();
    fetchRepo();
  }, []);

  // fetching the user
  const fetchUser = async () => {
    const response = await fetch(`${url}/users/josephe44`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

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

  const currRepo = currentRepo.slice(0, 6);

  return (
    <div className="home">
      <UserProfile user={user} />
      <HomeRepoItem repos={currRepo} />
    </div>
  );
}

export default Home;
