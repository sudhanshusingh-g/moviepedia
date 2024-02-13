
function Banner() {
  return (
    <div className="h-[60vh] w-[90vw] m-auto">
      <img
        className="h-full w-full bg-cover bg-center bg-no-repeat object-cover"
        src=""
        alt=""
      />
      <div className="bg-slate-800 text-white text-center p-4 relative bottom-20 opacity-50">
        <h1 className="uppercase">Movie Title</h1>
        <p className="cursor-pointer underline">Watch Latest Trailer</p>
      </div>
    </div>
  );
}

export default Banner;
