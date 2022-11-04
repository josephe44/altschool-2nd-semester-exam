import React, { useContext } from "react";
import { UserProfile, Spinner, HomeRepoItem } from "../components";
import UserContext from "../context/users/UserContext";

function Home() {
  const { loading } = useContext(UserContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="home">
      <UserProfile />
      <HomeRepoItem />
    </div>
  );
}

export default Home;
