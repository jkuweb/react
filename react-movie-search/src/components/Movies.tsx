import error from "../withoutResults.json";

const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movie-result-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.image} alt={`poster of ${movie.title} movie`} />
          <p>Year: {movie.year}</p>
        </li>
      ))}
    </ul>
  );
};

const ErrorMoviesResult = ({ error }) => {
  return <p>{error.Error}</p>;
};

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? (
    <ListOfMovies movies={movies} />
  ) : (
    <ErrorMoviesResult error={error} />
  );
};
