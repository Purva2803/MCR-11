import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Stared = ({ changeText }) => {
  const getMovies = JSON.parse(localStorage.getItem("movies")) || [];
  const [staredMovies, setStaredMovies] = useState([]);

  useEffect(() => {
    const staredMovies = getMovies.filter(movie => movie.stared);
    setStaredMovies(staredMovies);
  }, []);

  const removeStared = (movieId) => {
    changeText(movieId); // Call the changeText function to toggle the stared status
    const updatedStaredMovies = staredMovies.filter(movie => movie.id !== movieId);
    setStaredMovies(updatedStaredMovies);
  };

  return (
    <div>
      {staredMovies.map((movie) => (
        <div className="movie" key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            <img src={movie.imageURL} alt={movie.title} />
          </NavLink>
          <div className="movie-info">
            <h4>{movie.title}</h4>
            <span>{movie.year}</span>
          </div>
          {/* <div className="movie-over"> */}
            {/* <h2>Overview:</h2>
            <p>{movie.overview}</p>
            <button onClick={() => removeStared(movie.id)} className="btn">
              Remove
            </button> */}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

