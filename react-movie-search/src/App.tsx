import React from "react";
import moviesResult from "./withResults.json";
import { Movies } from "./components/Movies";
import "./App.css";

export const useMovies = () => {
  const movies = moviesResult.Search;
  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));
  return { movies: mappedMovies };
};

export const App: React.FC = () => {
  const { movies } = useMovies();
  return (
    <>
      <header className="header">
        <h1>Movie Search</h1>
        <div className="header__search-form">
          <input type="text" placeholder="avangers, start wars..." />
          <button>Search</button>
        </div>
      </header>
      <main className="main">
        <Movies movies={movies} />
      </main>
    </>
  );
};
