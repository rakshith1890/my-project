import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Network() {
    const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!location.state?.id) {
            navigate("/login");
        }
    }, [location, navigate]);

    // Fetch users from backend
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:8000/users");
                console.log("Fetched users:", response.data); // Debugging log
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, []);

    // Filter users based on search input
    useEffect(() => {
        setFilteredUsers(
            users.filter(user => 
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold mb-4">
                Welcome {location.state?.name || "Guest"} to the Networking Hub
            </h1>

            {/* Search Bar */}
            <input 
                type="text" 
                placeholder="Search users..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className="w-full p-2 mb-4 border rounded"
            />

            {/* Display User Profiles */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
            <div 
                key={user._id} 
                className="p-4 bg-white shadow-lg rounded-lg border border-gray-300 text-black"
            >
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-600">Email: {user.email}</p>

                {/* Message Button */}
                <button 
                    onClick={() => navigate(`/chat/${user._id}`)}
                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Message
                </button>
            </div>
        ))
    ) : (
        <p className="text-gray-800 font-semibold">No users found.</p>
    )}
</div>

            {/* Job Portal and Learnings Section */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
                <button 
                    onClick={() => navigate("/job")} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
                >
                    Go to Job Portal
                </button>
                <button 
                    onClick={() => navigate("/learning")} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
                >
                    Go to Learnings
                </button>
            </div>
        </div>
    );
}

export default Network;
