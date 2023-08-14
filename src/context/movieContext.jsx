import React, { createContext, useContext, useState } from "react";
import { movies } from "../data/data";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const getMovies = JSON.parse(localStorage.getItem("movies")) || movies;
  const [newmovies, setMovies] = useState(getMovies);


  


 
  const changeText = (movieId) => {
    console.log(movieId);
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            stared: !movie.stared,
          };
        } else {
          return movie;
        }
      });
  
      // Update local storage
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
  
      return updatedMovies;
    });
  };
  

  const addTowatchList = (movieId) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            watchList: !movie.watchList,
          };
        } else {
          return movie;
        }
      });
    });
  };


  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery,addTowatchList,changeText }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
