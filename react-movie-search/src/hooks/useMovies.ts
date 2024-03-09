import moviesResult from "../withResults.json";

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
