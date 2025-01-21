import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default useTopRatedMovies;