import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

export const AddMovie = () => {
  const navigate = useNavigate();

  const addMovie = (movie) => {
    const existingMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const updatedMovies = [...existingMovies, movie];
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const setIds = () => {
        const i = 10;

        return i +1;
    }


    const newMovie = {
      id: setIds(),
      title: event.target.title.value,
      imageURL: event.target.imageURL.value,
      summary: event.target.summary.value,
      year: event.target.year.value,
      genre: event.target.genre.value,
      rating: event.target.rating.value,
      director: event.target.director.value,
      writer: event.target.writer.value,
      cast: event.target.cast.value,
      stared: false, // Initialize the stared property
    };

    addMovie(newMovie);
    navigate('/');

    // Clear the form fields
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="imageURL" placeholder="Image URL" />
        <input type="text" name="summary" placeholder="Summary" />
        <input type="text" name="year" placeholder="Year" />
        <input type="text" name="genre" placeholder="Genre" />
        <input type="text" name="rating" placeholder="Rating" />
        <input type="text" name="director" placeholder="Director" />
        <input type="text" name="writer" placeholder="Writer" />
        <input type="text" name="cast" placeholder="Cast" />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
