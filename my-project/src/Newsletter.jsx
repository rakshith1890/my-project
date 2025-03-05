function Newsletter() {
    return(
        <>
        <div className="w-[300px] rounded-md border bg-white shadow-lg rounded-2xl">
  <img
    src="https://vbithyd.ac.in/wp-content/uploads/2024/05/2.png"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-bold font-sans">News-Letter 2024 CSBS</h1>
    <p className="mt-3 text-sm text-black font-normal text-justify">
    CSBS 2K24 Magazine Release! Relive the moments of creativity and inspiration captured within its pages.
    </p>
    <button
      type="button"
      onClick={() => window.open("/csbs.pdf", '_blank')}
      className="mt-4 rounded-lg bg-black px-6 py-3 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
  </div>
        </div>
        
        </>
    )
}
export default Newsletter