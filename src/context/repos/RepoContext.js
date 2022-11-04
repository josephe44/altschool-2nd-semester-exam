import { createContext, useState, useEffect } from "react";

const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [repo, setRepo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(9);

  const url = process.env.REACT_APP_GITHUB_URL;
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetchRepos();
  }, []);

  //   fetch all repos
  const fetchRepos = async () => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 36,
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

  //   fetch a repo by the name
  const fetchRepo = async (repoName) => {
    const response = await fetch(`${url}/repos/josephe44/${repoName}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepo(data);
    setLoading(false);
  };

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

  return (
    <RepoContext.Provider
      value={{
        repo,
        repos,
        loading,
        currentRepo,
        numberOfPages,
        currentPage,
        setCurrentPage,
        fetchRepo,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
};

export default RepoContext;
