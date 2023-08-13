import { NavLink } from "react-router-dom";
import { Search } from "./Search";
import React, { useState } from "react";
import "../styles/header.css";

export const Header = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [matchingString, setMatchingString] = useState("");

  return (
    <div>
      <div className="header">
        <h1>MYMOVIES</h1>
        <Search
          onSearch={(filteredMovies, matchingString) => {
            setFilteredMovies(filteredMovies);
            setMatchingString(matchingString);
          }}
        />
        <div>
          <NavLink to="/" activeClassName="active" end>
            Movies
          </NavLink>
          <NavLink to="/stared" activeClassName="active">
            Stared
          </NavLink>
        </div>
      </div>
      <div className="matching-string">
        {matchingString && ` ${matchingString}`}
      </div>
    </div>
  );
};

