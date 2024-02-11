

function Navbar() {
  return (
    <div className="border flex space-x-8 p-4 items-center">
        <h1 className="text-xl text-yellow-500 bg-gray-950 font-bold p-2 uppercase rounded cursor-default">Moviepedia</h1>
        <div className="flex space-x-4">
            <h2 className="font-semibold text-lg cursor-pointer">Movies</h2>
            <h2 className="font-semibold text-lg cursor-pointer">Watchlist</h2>
        </div>
    </div>
  )
}

export default Navbar