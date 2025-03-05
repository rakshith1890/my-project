// eslint-disable-next-line no-unused-vars
import React from "react"
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Network (){
    const location=useLocation()
    const navigate = useNavigate()

    const handleJobClick = () => {
        navigate("/job");
    }
    const handleLearningClick = () => {
        navigate("/learning");
    }


    return (
        // <div className="homepage">

        //     <h1>Hello {location.state.id} and welcome to the Networking Hub</h1>
        //     <button onClick={handleJobClick}>Go to Job Portal</button>

        // </div>
        <div className="flex justify-center items-center h-screen w-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-xl font-semibold mb-4 font-sans text-black">
      Hello {location.state.id} and welcome to the Networking Hub
        </h1>
        <div className="flex justify-between">
        <button
      onClick={handleJobClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go to Job Portal
        </button>
        <button
      onClick={handleLearningClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go to Learning
        </button>
        </div>
        </div>
        </div>

    )
}

export default Network