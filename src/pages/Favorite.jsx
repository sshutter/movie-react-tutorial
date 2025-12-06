import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="flex-row w-full justify-content-center justify-items-center text-center">
        <h2 className="my-4">Favorites</h2>
        <div className="container-fluid d-flex flex-wrap justify-content-center mt-2">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full container-fluid d-flex justify-content-center mt-5">
        <h2>No favorite movie</h2>
      </div>
    );
  }
};

export default Favorite;
