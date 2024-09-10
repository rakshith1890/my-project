import './App.css';
import Slider from './components/Slider';

function App() {
  const redirectToLogin = () => {
    window.open("login.html", "_blank");  // Replace with your actual login URL
  };

  const redirectToSignup = () => {
    window.open("signup.html", "_blank");  // Replace with your actual sign-up URL
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2"></div>
          <div className="hidden grow items-start lg:flex justify-start">
            <ul className="ml-12 inline-flex space-x-8 justify-between">
              <a href='https://vbithyd.ac.in/' className="h-10 w-10 left-2">
                <img src="https://vbithyd.ac.in/wp-content/uploads/2020/10/cropped-vbit-naac-and-nba-accredited-college-logos-min.png" alt="" />
              </a>
              <li>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  Home
                </a>
              </li>
              <li>
                <a href="login.html" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  Networking hub
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  Donation
                </a>
              </li>
              <li>
                <a href="jobportal.html" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  Job Portal
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  News Letter
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  News Room
                </a>
              </li>
              <li>
                <a href="feedback.html" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  Feedback
                </a>
              </li>
              <li>
                <a href="https://vbithyd.ac.in/about-vbit/" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={redirectToSignup}
            >
              Sign up
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={redirectToLogin}
            >
              Log In
            </button>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </div>
      <div className="pt-20 flex ">
        {/* Left Column (any content) */}
        <div className="w-1/2 flex flex-col space-y-3 p-3 mr-10 mt-20">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-center font-semibold text-black hover:bg-orange-400"
          >
            News & Events
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-center font-semibold text-black hover:bg-orange-400"
          >
            Gallery
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-center font-semibold text-black hover:bg-orange-400"
          >
            Success Stories
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-center font-semibold text-black hover:bg-orange-400"
          >
            Alumni Activities
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-center font-semibold text-black hover:bg-orange-400"
          >
            Courses
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-center font-semibold text-black hover:bg-orange-400"
          >
            Universities
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          {/* Add more buttons or content here */}
        </div>
        {/* Right Column (Slider) */}
        <div className="w-2/3 flex  space-y-3 p-3 ml-16 mt-14 z-20">
          <Slider />
        </div>
      </div>
    </>
  );
}

export default App;
