import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";

// ✅ Move socket outside the component to avoid re-creating it
const socket = io("http://localhost:8000");

const Chat = () => {
  const { receiverId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { senderId, senderName, receiverName } = location.state || {};

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const roomId = [senderId, receiverId].sort().join("_");
  const socketRef = useRef(socket);

  useEffect(() => {
    if (!senderId || !receiverId) {
      console.error("🚨 Missing senderId or receiverId. Redirecting...");
      navigate("/users");
      return;
    }

    console.log("🔗 Joining room:", roomId);
    socketRef.current.emit("joinRoom", roomId);

    fetch(`http://localhost:8000/messages/${senderId}/${receiverId}`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((msg) => ({
          text: msg.message,
          self: msg.senderId === senderId,
        }));
        setMessages(formatted);
        console.log("📨 Fetched messages:", formatted);
      })
      .catch((error) =>
        console.error("❌ Error fetching messages:", error)
      );

    const handleReceiveMessage = (data) => {
      console.log("📥 Received message via socket:", data);
      setMessages((prev) => [
        ...prev,
        {
          text: data.message,
          self: data.senderId === senderId,
        },
      ]);
    };

    socketRef.current.on("receiveMessage", handleReceiveMessage);

    return () => {
      console.log("👋 Cleaning up socket listener");
      socketRef.current.off("receiveMessage", handleReceiveMessage);
    };
  }, [senderId, receiverId, roomId, navigate]);

  const sendMessage = () => {
    if (message.trim()) {
      const msgData = {
        senderId,
        receiverId,
        message,
        roomId,
      };

      console.log("📤 Sending message:", msgData);
      socketRef.current.emit("sendMessage", msgData);

      setMessages((prev) => [...prev, { text: message, self: true }]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto bg-white border rounded-xl shadow-lg p-4">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">
        Chat with {receiverName || "Unknown"}
      </h2>

      <div className="flex-1 overflow-y-auto p-3 space-y-2 border bg-gray-50 rounded-lg">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.self ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg shadow-md ${
                  msg.self
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex mt-3">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-200"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
