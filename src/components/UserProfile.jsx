import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaUsers,
  FaUserFriends,
  FaRegEnvelope,
} from "react-icons/fa";
import UserContext from "../context/users/UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <section className="user-container">
        <div className="user">
          <div className="img-card">
            <img src={user.avatar_url} alt="profile-img" />
          </div>
          <div className="user-details">
            <h2>{user.name}</h2>
            <p className="username">{user.login}</p>
            <p className="user-bio">{user.bio}</p>
            <section className="social-container">
              <div className="social-card">
                <div>
                  <FaUsers />
                </div>
                <p>{user.followers}</p>
              </div>

              <div className="social-card">
                <div>
                  <FaFileAlt />
                </div>
                <p>{user.public_repos}</p>
              </div>
              <div className="social-card">
                <div>
                  <FaUserFriends />
                </div>
                <p>{user.following}</p>
              </div>
              <div className="social-card">
                <div>
                  <FaPencilAlt />
                </div>
                <p>{user.public_gists}</p>
              </div>
            </section>
            <div className="contact">
              <div className="social-flex">
                <div className="location">
                  <p>
                    <FaMapMarkerAlt />
                  </p>
                  <p>
                    <span> {user.location}</span>
                  </p>
                </div>
              </div>
              <div className="email">
                <p>
                  <FaRegEnvelope />
                </p>
                <p>
                  <span>{user.email}</span>
                </p>
              </div>

              <div className="group-btn">
                <div className="portfolio-btn">
                  <button>
                    <a target="_blank" rel="noreferrer" href={user.html_url}>
                      <span>View Profile</span>
                    </a>
                  </button>
                </div>
                <div className="portfolio-btn">
                  <button>
                    <Link to="repo-list">
                      <span>View More Repo</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
