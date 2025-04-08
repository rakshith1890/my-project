import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ loggedInUser }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        // ✅ Exclude the logged-in user from the list
        const filtered = loggedInUser
          ? data.filter((u) => u._id !== loggedInUser._id)
          : data;
        setUsers(filtered);
      })
      .catch((error) => console.error("❌ Error fetching users:", error));
  }, [loggedInUser]);

  const openChat = (receiver) => {
    if (!loggedInUser?._id) {
      console.error("❌ No logged-in user. Redirecting to login...");
      navigate("/login");
      return;
    }

    navigate(`/chat/${receiver._id}`, {
      state: {
        senderId: loggedInUser._id,
        senderName: loggedInUser.name,
        receiverName: receiver.name,
      },
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      {users.length === 0 ? (
        <p>No other users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user._id}
              className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => openChat(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
