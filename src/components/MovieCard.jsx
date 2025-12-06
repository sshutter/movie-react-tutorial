import React, { useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const MovieCard = ({ movie }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteBtnClick = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="rounded-2 shadow-lg m-3 w-[700px] h-auto text-center">
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
          className="h-auto w-[300px] rounded-top-2 bg-secondary"
        />
      </div>

      <div className="mt-2">
        <h5>{movie.title}</h5>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
