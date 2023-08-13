import { movies } from "../data/data";
import React, { useState, useEffect } from "react";

export const Search = ({ onSearch }) => {
  const getMovies = JSON.parse(localStorage.getItem("movies")) || movies;

  const [newmovies, setMovies] = useState(getMovies);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(newmovies));
  }, [newmovies]);

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => {
        const search = e.target.value.toLowerCase();
        const filteredMovies = movies.filter((movie) => {
          const titleLower = movie.title.toLowerCase();
          return titleLower.includes(search) || titleLower === search;
        });
        setMovies(filteredMovies);

        // Pass the filtered movies and matching string back to the parent component
        onSearch(filteredMovies, search);
      }}
    />
  );
};
