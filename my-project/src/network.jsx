import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Network() {
    const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);

    const hasFetchedUsers = useRef(false); // ✅ mount guard

    const currentUser = useMemo(() => {
        return location.state || JSON.parse(localStorage.getItem("user"));
    }, [location.state]);

    useEffect(() => {
        if (!currentUser?.id) {
            console.warn("🚨 Unauthorized access. Redirecting to login...");
            navigate("/login");
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        if (location.state) {
            localStorage.setItem("user", JSON.stringify(location.state));
        }
    }, [location.state]);

    useEffect(() => {
        if (hasFetchedUsers.current) return;

        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:8000/users");
                console.log("✅ Permanently fetched users:", response.data);
                setUsers(response.data);
                hasFetchedUsers.current = true; // ✅ lock it after first run
            } catch (error) {
                console.error("❌ Error fetching users:", error);
            }
        }

        fetchUsers();
    }, []);

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, users]);

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold mb-4">
                Welcome {currentUser?.name || "User"} to the Networking Hub
            </h1>

            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user._id}
                            className="p-4 bg-white shadow-lg rounded-lg border border-gray-300 text-black"
                        >
                            <h2 className="text-lg font-semibold">{user.name}</h2>
                            <p className="text-gray-600">Email: {user.email}</p>

                            <button
                                onClick={() => navigate(`/chat/${user._id}`, {
                                    state: {
                                        senderId: currentUser?.id,
                                        senderName: currentUser?.name,
                                        receiverId: user._id,
                                        receiverName: user.name
                                    }
                                })}
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
