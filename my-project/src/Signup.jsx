import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
      e.preventDefault();
      
      console.log("Submitting Data:", { name, email, password }); // Debugging
  
      try {
          await axios.post("http://localhost:8000/signup", {
              name: name.trim(), // Ensure no empty spaces
              email: email.trim(),
              password: password.trim()
          }).then(res => {
              console.log("Server Response:", res.data);
              
              if (res.data === "exist") {
                  alert("User already exists");
              } else if (res.data === "success") {
                  alert("Signup successful");
                  navigate("/network", { state: { id: email, name: name } });
              }
          }).catch(e => {
              alert("Signup failed");
              console.log("Error:", e);
          });
      } catch (e) {
          console.log("Request failed:", e);
      }
  }

    return (
        <div className="login">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                <div className="flex items-start justify-center px-6 py-12 sm:px-8 lg:px-10 lg:py-20 bg-white shadow-lg rounded-lg">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                        
                        <form action="POST" method="POST" className="mt-6">
                            <div className="space-y-4">
                                {/* Name Input */}
                                <div>
                                    <label className="text-sm font-medium text-gray-900">Name</label>
                                    <div className="mt-1">
                                        <input
                                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                            type="text"
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="text-sm font-medium text-gray-900">Email address</label>
                                    <div className="mt-1">
                                        <input
                                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Input */}
                                <div>
                                    <label className="text-sm font-medium text-gray-900">Password</label>
                                    <div className="mt-1">
                                        <input
                                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={submit}
                                        className="w-full rounded-md bg-black px-4 py-2.5 font-semibold text-white hover:bg-black/80 transition duration-200"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Already have an account? */}
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-blue-600 cursor-pointer hover:underline"
                            >
                                Login here
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="hidden lg:block">
                    <img
                        className="h-full w-full object-cover rounded-md"
                        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1724771892~exp=1724775492~hmac=eeda23b3b66cacfc62f1eb6c98fa65f6e3eaf7c4ed52b2be3eb3ad2892820a6f&w=740"
                        alt="Signup Illustration"
                    />
                </div>
            </div>
        </div>
    );
}

export default Signup;
