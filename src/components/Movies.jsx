import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import PageTab from "./PageTab";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNumber,setPageNumber]=useState(1);

  useEffect(() => {
    (function () {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${pageNumber}`
        )
        .then((res) => {
          setMovies(res.data.results);
        });
    })();
  }, [pageNumber]);

  const onNext=()=>{
    setPageNumber(pageNumber+1);
  }

  const onPrev=()=>{
    if(pageNumber>1){
      setPageNumber(pageNumber-1)
    }
  }

  return (
    <>
      <h1 className="text-xl font-bold text-center p-4">Trending Movies</h1>
      <div className="container flex flex-wrap justify-between items-center py-4 w-[90vw] m-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <PageTab onNext={onNext} onPrev={onPrev} pageNumber={pageNumber}/>
    </>
  );
}

export default Movies;
