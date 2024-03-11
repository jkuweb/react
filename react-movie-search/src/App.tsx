import React from "react";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import "./App.css";

export const App: React.FC = () => {
  const { search, setSearch: updateSearch, err: error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Forma no controlada (aquí no aparece pero user el useRef tb lo sería)
    // const fields = Object.fromEntries(new window.FormData(event.currentTarget));
    // Forma controlada -> es React quien controla
    getMovies();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <>
      <header className="header">
        <h1>Movie Search</h1>
        <div className="header__search-form">
          <form onSubmit={handleFormSubmit} className="form">
            <input
              name="query"
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="avangers, start wars..."
            />
            <button>Search</button>
          </form>
          <div style={{ height: "16px" }}>
            {error && <span style={{ color: "red" }}>{error}</span>}
          </div>
        </div>
      </header>
      <main className="main">
        <Movies movies={movies} />
      </main>
    </>
  );
};
// https://www.youtube.com/watch?v=GOEiMwDJ3lc&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=5
