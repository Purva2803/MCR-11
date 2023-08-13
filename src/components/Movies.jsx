import React, { useState, useEffect } from "react";
import { movies } from "../data/data";
import { useSearchContext } from "../context/movieContext";
import "../styles/movies.css";
import { NavLink } from "react-router-dom";

export const Movies = () => {
  const { searchQuery } = useSearchContext();

  const getMovies = JSON.parse(localStorage.getItem("movies")) || movies;
  const [newmovies, setMovies] = useState(getMovies);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(newmovies));
  }, [newmovies]);

  const changeText = (movieId) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            stared: !movie.stared,
          };
        } else {
          return movie;
        }
      });
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

  const genres = [...new Set(movies.flatMap(({ genre }) => genre))];

  const setYears = () => {
    const initial = 1990;
    const final = 2023;
    const years = [];
    for (let i = initial; i < final; i++) {
      years.push(i);
    }
    return years;
  };

  const years = setYears();

  const ratings = [];

  const newrating = (ratings) => {
    for (let i = 1; i <= 10; i++) {
      ratings.push(i);
    }
    return ratings;
  };

  const newratings = newrating(ratings);

  const filterByyear = (year) => {
    if (year === "All") {
      setMovies(movies);
      return;
    }

    const filteredMovies = movies.filter((movie) => movie.year == year);
    setMovies(filteredMovies);
  };

  const filterByrating = (rating) => {
    if (rating === "All") {
      setMovies(movies);
      return;
    }

    const filteredMovies = movies.filter((movie) => movie.rating == rating);
    setMovies(filteredMovies);
  };

  const filterMovies = (genre) => {
    if (genre === "All") {
      setMovies(movies);
      return;
    }

    const filteredMovies = movies.filter((movie) =>
      movie.genre.includes(genre)
    );
    setMovies(filteredMovies);
  };

  const filteredMovies = newmovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <h1>Movies</h1>
        <button>
          <NavLink to="/addMovies">Add Movies</NavLink>
        </button>
        <div>
          <div>
            <select onChange={(e) => filterMovies(e.target.value)}>
              <option value="All">All</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select onChange={(e) => filterByyear(e.target.value)}>
              <option value="All">All</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select onChange={(e) => filterByrating(e.target.value)}>
              <option value="All">All</option>
              {newratings.map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="movies">
          {filteredMovies.map((movie) => (
            <div className="movie" key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>
                <img src={movie.imageURL} alt="movie" />
              </NavLink>
              <h3>{movie.title}</h3>
              <button onClick={() => changeText(movie.id)}>
                {movie.stared ? "Stared" : "Start"}
              </button>
              <button onClick={() => addTowatchList(movie.id)}>
                {movie.watchList ? "Added To watch list" : "Add to watch list"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
