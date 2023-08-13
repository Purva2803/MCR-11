import { useParams } from "react-router-dom";
import { movies } from ".././data/data";

export const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const getMovies = JSON.parse(localStorage.getItem("movies")) || movies;
    console.log(getMovies);

  const findMovie = getMovies.find((movie) => movie.id == id);
  console.log(findMovie);

  return (
    <div>
      <h1>Single Movie</h1>
      <div>
        <img src={findMovie.imageURL} alt="movie" />
        <h3>{findMovie.title}</h3>
        <p>{findMovie.summary}</p>
        <p>{findMovie.year}</p>
        <p>
          {findMovie.genre.map((genre) => (
            <span>{genre}</span>
          ))}
        </p>
        <p>{findMovie.rating}</p>
        <p>{findMovie.director}</p>
        <p>{findMovie.writer}</p>
        <p>
          {findMovie.cast.map((cast) => {
            return <span>{cast}</span>;
          })}
        </p>
        <p>{findMovie.summary}</p>
      </div>
    </div>
  );
};
