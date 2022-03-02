import React from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/currencies">
        <h3>Go to currencies</h3>
      </Link>
    </div>
  );
};

export default Main;
