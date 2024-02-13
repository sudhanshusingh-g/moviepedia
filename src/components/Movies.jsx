import spider from "../assets/spider.avif";
import MovieCard from "./MovieCard";

function Movies() {
  const movies = [
    {
      id: 1,
      title: "Batman",
      banner: spider,
    },
    {
      id: 2,
      title: "Spider",
      banner: spider,
    },
    {
      id: 3,
      title: "Ashok",
      banner: spider,
    },
    {
      id: 4,
      title: "Mukesh",
      banner: spider,
    },
    {
      id: 5,
      title: "Australia",
      banner: spider,
    },
  ];
  return (
    <>
      <h1 className="text-xl font-bold text-center p-4">Trending Movies</h1>
      <div className="container flex justify-between py-4 w-[90vw] m-auto">
        {movies.map((movie) => (
          <MovieCard key={movies.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
