import "./App.css";
import Slider from "./components/Slider";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    window.open("http://localhost:5173/login", "_blank");
  };

  const redirectToSignup = () => {
    window.open("http://localhost:5173/signup", "_blank");
  };

  const redirectToEvents = () => {
    window.open("https://vbithyd.ac.in/campus-events/", "_blank");
  };

  const redirectToCourses = () => {
    window.open("https://www.coursera.org/courses", "_blank");
  };

  const redirectToAlumniActivities = () => {
    window.open("http://localhost:5173/alumniactivities", "_blank");
  };

  const handleStories = () => {
    navigate("/stories");
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="hidden grow items-start lg:flex justify-start">
            <ul className="ml-12 inline-flex space-x-8 justify-between">
              <a href="https://vbithyd.ac.in/" target="_blank" rel="noopener noreferrer" className="h-10 w-10">
                <img
                  src="https://vbithyd.ac.in/wp-content/uploads/2020/10/cropped-vbit-naac-and-nba-accredited-college-logos-min.png"
                  alt="VBIT Logo"
                />
              </a>
              <li>
                <a className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:5173/networking-hub"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
                >
                  Networking Hub
                </a>
              </li>
              <li className="relative group">
                <button className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  Contribution
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-1">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Funding
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Ideas
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="http://localhost:5173/newsletter"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  News Room
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:5173/feedback"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="https://vbithyd.ac.in/about-vbit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <button onClick={redirectToSignup} className="border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm">
              Sign Up
            </button>
            <button onClick={redirectToLogin} className="border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm">
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 flex mb-16">
        {/* Buttons Section */}
        <div className="w-1/2 flex flex-col space-y-4 p-3 mr-10 mt-20">
          <button onClick={redirectToEvents} className="bg-orange-400 px-6 py-4 text-black hover:bg-orange-500 rounded-md">
            Events
          </button>
          <button className="bg-orange-400 px-6 py-4 text-black hover:bg-orange-500 rounded-md">
            Gallery
          </button>
          <button onClick={handleStories} className="bg-orange-400 px-6 py-4 text-black hover:bg-orange-500 rounded-md">
            Success Stories
          </button>
          <button onClick={redirectToAlumniActivities} className="bg-orange-400 px-6 py-4 text-black hover:bg-orange-500 rounded-md">
            Alumni Activities
          </button>
          <button onClick={redirectToCourses} className="bg-orange-400 px-6 py-4 text-black hover:bg-orange-500 rounded-md">
            Courses
          </button>
          <button className="bg-orange-400 px-6 py-4 text-black hover:bg-orange-500 rounded-md">
            Universities
          </button>
        </div>

        {/* Slider Section */}
        <div className="w-2/3 flex space-y-3 p-3 ml-16 mt-14 z-20">
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Home;
