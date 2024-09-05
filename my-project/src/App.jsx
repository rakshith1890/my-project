// import { useState } from 'react'
import './App.css';
// import image1 from './image1.jpg';
// import ImageSlider from './components/ImageSlider';


function App() {
  // const [count, setCount] = useState(0)

  const redirectToLogin = () => {
    window.location.href = "login.html";  // Replace with your actual login URL
  };

  const redirectToSignup = () => {
    window.location.href = "signup.html";  // Replace with your actual sign-up URL
  };

  return (
    <>
      {/* <div className="container">
        <h1>Welcome to Alumni Association</h1>
        <button className="button button-login" onClick={redirectToLogin}>Login</button>
        <button className="button button-signup" onClick={redirectToSignup}>Sign Up</button>
      </div> */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2"></div>
    <div className="hidden grow items-start lg:flex justify-start" >
      <ul className="ml-12 inline-flex space-x-8 justify-between" >
        <a href='https://vbithyd.ac.in/'
           className="h-10 w-10 left-2" ><img src="https://vbithyd.ac.in/wp-content/uploads/2020/10/cropped-vbit-naac-and-nba-accredited-college-logos-min.png" alt="" />
        </a>
        <li>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href= "login.html"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
            Networking hub
             
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
            Donation 
            
          </a>
        </li>
        <li>
          <a
            href="jobportal.html"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
            Job Portal
            
          </a>
        </li>
        <li>
        <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
            News Letter
            
          </a>
        </li>
        <li>
        <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
            News Room
            
          </a>
        </li>
        <li>
          <a
            href="feedback.html"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
            Feedback 
          </a>
        </li>
        <li>
          <a
            href="https://vbithyd.ac.in/about-vbit/"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
          >
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
    <div className="lg:hidden">

       </div>
      </div>
      </div>
      {/* <div>
        <img src={image1} alt="img" />
      </div> */}
  <div className='justify-around mb-8'>
      <button
      type="button"
      className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-sm 
      font-semibold text-white hover:bg-orange-400 " >
      News & Events
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
      </button>
      <button
      type="button"
      className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-sm 
      font-semibold text-white hover:bg-orange-400 ml-3" >
      Success Stories
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
      </button>
  </div>
  <div className='justify-around mb-8'>
      <button
      type="button"
      className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-sm 
      font-semibold text-white hover:bg-orange-400 " >
      Courses
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
      </button>
      <button
      type="button"
      className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-sm 
      font-semibold text-white hover:bg-orange-400 ml-3 " >
      Gallery
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
      </button>
  </div>
  <div className='justify-around mb-8'>
      <button
      type="button"
      className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-sm 
      font-semibold text-white hover:bg-orange-400 " >
      Alumni Activities
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
      </button>
      <button
      type="button"
      className="inline-flex items-center rounded-md bg-orange-400 px-6 py-4 text-sm 
      font-semibold text-white hover:bg-orange-400 ml-3" >
      Alumni Directory
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
      </button>
  </div>
  
    </>
  );
}

export default App;
