import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <header className="Header">
        {" "}
        {/* add the className */}
        <h1>My App</h1>
        <nav>
          <Link to="/">Add Items</Link>
          <Link to="/FetchApi">GitHub API</Link>
        </nav>
      </header>
    </div>
  );
};
