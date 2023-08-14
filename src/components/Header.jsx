import { NavLink } from "react-router-dom";
import { Search } from "./Search";
import React, { useState,useEffect } from "react";
import "../styles/header.css";
import { useSearchContext } from "../context/movieContext";
import { movies } from "../data/data";

export const Header = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [matchingString, setMatchingString] = useState("");
  const { searchQuery ,setSearchQuery} = useSearchContext();

  const getMovies = JSON.parse(localStorage.getItem("movies")) || movies;

  useEffect(() => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  }, [searchQuery]);
  return (
    <div>
      <div className="header">
        <h1>MYMOVIES</h1>
        <Search
          onSearch={(search) => {
            setSearchQuery(search);
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
      
    </div>
  );
};

