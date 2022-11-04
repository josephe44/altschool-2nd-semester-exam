import React, { useContext } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { RepoItems, Spinner, Pagination } from "../components";
import RepoContext from "../context/repos/RepoContext";
import Repo from "./Repo";

function Repos() {
  const { loading } = useContext(RepoContext);

  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="home">
        {location.pathname === "/repo-list" ? (
          <>
            <RepoItems />
            <Pagination />
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
