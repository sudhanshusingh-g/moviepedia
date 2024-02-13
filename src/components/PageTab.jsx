/* eslint-disable react/prop-types */
function PageTab({onNext,onPrev,pageNumber}) {
  return (
    <div className="flex justify-center gap-2 text-center  w-[15vw]  items-center  m-auto ">
      <div onClick={onPrev} className="text-slate-950 font-bold cursor-pointer border-2 rounded-md hover:bg-blue-400 hover:text-white p-2">
        Prev
      </div>
      <div className="cursor-pointer p-2 text-center font-semibold border-b-2 border-blue-400">
        {pageNumber}
      </div>
      <div onClick={onNext} className="text-slate-950 font-bold cursor-pointer  rounded-md border-2 hover:bg-blue-400 hover:text-white p-2">
        Next
      </div>
    </div>
  );
}

export default PageTab;
