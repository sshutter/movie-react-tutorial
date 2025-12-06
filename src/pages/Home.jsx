import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies, searchMovie } from "../services/api";
import Pagination from "../components/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (searchQuery, page) => {
    try {
      setLoading(true);
      console.log("Searching for:", searchQuery);
      const filteredMovies = await searchMovie(searchQuery, page);
      setMovies(filteredMovies);
      setError(null);
    } catch (error) {
      setError("Failed to search movies.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    if (!searchQuery.trim()) return;

    setPage(1);

    setTimeout(() => {
      handleSearch(searchQuery, 1);
    }, 500);
  };

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setLoading(true);
        if (searchQuery.trim()) {
          const res = await searchMovie(searchQuery, page);
          console.log("Search results:", res);
          setError(null);
          setMovies(res);
        } else {
          const res = await fetchPopularMovies(page);
          setError(null);
          setMovies(res);
        }
      } catch (error) {
        setError("Failed to fetch popular movies.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [page]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex d-flex justify-content-center"
      >
        <input
          type="text"
          placeholder="Search movies..."
          className="form-control w-50 my-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary my-3 mx-2">
          Search
        </button>
      </form>

      {error && <p className="text-danger">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-100 d-flex flex-wrap justify-content-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
