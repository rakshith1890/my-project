function AlumniActivities() {
    return(
        <>
        <div className="w-[300px] rounded-md border bg-white shadow-lg rounded-2xl">
  <img
    src="https://vbithyd.ac.in/wp-content/uploads/2021/12/19.jpg"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-bold font-sans">Alumni Meet 2021</h1>
    <p className="mt-3 text-sm text-black font-normal text-justify">
    VBIT organised the “Alumni Meet 2021” on 19th of December 2021 at Nalanda Auditorium, VBIT College campus. Here are a few glimpses of it.
    </p>
    <button
      type="button"
      onClick={() => window.open("https://vbithyd.ac.in/event/alumni-meet-2021/", '_blank')}
      className="mt-4 rounded-lg bg-black px-6 py-3 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Visit
    </button>
  </div>
        </div>
        
        </>
    )
}
export default AlumniActivities