import React from "react";
import {
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaUsers,
  FaUserFriends,
  FaRegEnvelope,
} from "react-icons/fa";

function UserProfile({ user }) {
  return (
    <>
      <section className="user-container">
        <div className="user">
          <div className="img-card">
            <img src={user.avatar_url} alt="profile-img" />
          </div>
          <div className="user-details">
            <div className="banner-flex">
              <div className="banner">
                <span>Github Profile</span>
              </div>
              <div className="banner">
                <span>Hireable</span>
              </div>
              <div className="banner">
                <span>Account: {user.plan.name}</span>
              </div>
            </div>
            <h2>{user.name}</h2>
            <p className="username">{user.login}</p>
            <p className="user-bio">{user.bio}</p>
            <div className="contact">
              <div className="social-banner email">
                <p>
                  <FaRegEnvelope />
                </p>
                <p>
                  <span>{user.email}</span>
                </p>
              </div>
              <div className="social-flex">
                <div className="location social-banner">
                  <p>
                    <FaMapMarkerAlt />
                  </p>
                  <p>
                    <span> {user.location}</span>
                  </p>
                </div>
                <div className="portfolio-btn">
                  <button>
                    <a target="_blank" rel="noreferrer" href={user.html_url}>
                      <span>view profile</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className="social-container">
            <div className="social-card">
              <div>
                <p>Followers</p>
                <p>{user.followers}</p>
              </div>
              <p>
                <FaUsers />
              </p>
            </div>

            <div className="social-card">
              <div>
                <p>Public Repos</p>
                <p>{user.public_repos}</p>
              </div>
              <p>
                <FaFileAlt />
              </p>
            </div>
            <div className="social-card">
              <div>
                <p>Following</p>
                <p>{user.following}</p>
              </div>
              <p>
                <FaUserFriends />
              </p>
            </div>
            <div className="social-card">
              <div>
                <p>Public Gists</p>
                <p>{user.public_gists}</p>
              </div>
              <p>
                <FaPencilAlt />
              </p>
            </div>
            {/* <div className="social-card">
              <div>
                <p>collaborators</p>
                <p>{user.collaborators}</p>
              </div>
              <p>
                <FaPencilAlt />
              </p>
            </div> */}
          </section>
        </div>

        <div>{/* Repo */}</div>
      </section>
    </>
  );
}

export default UserProfile;
