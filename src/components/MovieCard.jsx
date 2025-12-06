import React, { useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleFavoriteBtnClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };
  return (
    <div className="rounded-2 shadow-lg m-3 w-auto h-25 text-center">
      <div className="position-relative">
        <button
          className="btn position-absolute top-0 end-0 rounded-circle m-2 p-2 bg-black bg-opacity-75 border-0"
          onClick={handleFavoriteBtnClick}
        >
          {favorite ? (
            <IoMdHeart size={24} color="white" />
          ) : (
            <IoIosHeartEmpty size={24} color="white" />
          )}
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-top-2 bg-secondary"
          style={{ width: "500px", height: "700px", objectFit: "cover" }}
        />
      </div>

      <div className="mt-2">
        <h5
          className="text-truncate text-nowrap mx-auto"
          style={{ width: "300px" }}
        >
          {movie.title}
        </h5>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
