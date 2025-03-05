import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Feedback from './Feedback';
import Network from './network';
import AlumniActivities from './Alumniactivities';
import Job from './Job';
import Leaning from './Learning';
import Newsletter from './Newsletter';
import Stories from './Stories';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/alumniactivities" element={<AlumniActivities />}/>
        <Route path="/stories" element={<Stories />}/>
        <Route path="/newsletter" element={<Newsletter />}/>
        <Route path="/network" element={<Network />}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/job" element={<Job />}/>
        <Route path="/learning" element={<Leaning />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>

  </div>
  );
}

export default App;
