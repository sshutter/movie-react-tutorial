const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchPopularMovies = async (page) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await response.json();
  const resultsSorted = data.results.sort(
    (a, b) => b.vote_count - a.vote_count
  );
  return resultsSorted;
};

export const searchMovie = async (query, page) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      query
    )}&page=${page}`
  );
  const data = await response.json();
  const resultsSorted = data.results.sort(
    (a, b) => b.vote_count - a.vote_count
  );
  return resultsSorted;
};
