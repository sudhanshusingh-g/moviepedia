// eslint-disable-next-line react/prop-types
function MovieCard({ title, banner }) {
  return (
    <div className="card text-center w-[150px] cursor-pointer hover:scale-110 duration-300 shadow-lg">
      {banner && <img src={banner} alt={title} />}
      <h2>{title}</h2>
    </div>
  );
}

export default MovieCard;
