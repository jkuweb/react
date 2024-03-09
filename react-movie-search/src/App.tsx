import React from "react";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import "./App.css";

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
// https://www.youtube.com/watch?v=GOEiMwDJ3lc&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=5

// 33:30 min
