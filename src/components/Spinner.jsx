import React from "react";
import { FaSpinner } from "react-icons/fa";

function Spinner() {
  return (
    <div>
      <div className="spinner-container">
        <FaSpinner className="spinner" />
      </div>
    </div>
  );
}

export default Spinner;
