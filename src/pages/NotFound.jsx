import React from "react";
import { Link } from "react-router-dom";
import { FaReply, FaRegTired } from "react-icons/fa";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <div className="not-found-icon">
        <div>
          <FaRegTired />
        </div>
        <p>Page Not Found</p>
      </div>
      <button className="not-found-btn">
        <Link to="/">
          <div>
            <FaReply />
          </div>
          <span>Go Back Home</span>
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
