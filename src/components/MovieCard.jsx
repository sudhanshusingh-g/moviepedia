/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="bg-cover bg-center text-center w-[200px] h-[300px] m-2 cursor-pointer hover:scale-105 duration-300 shadow-lg"
    >
      <h2 className="relative top-64 p-2 bg-gray-800 bg-opacity-40 text-white">
        {movie.title || movie.name}
      </h2>
    </div>
  );
}

export default MovieCard;
