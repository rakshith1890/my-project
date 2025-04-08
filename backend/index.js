const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./mongoschema");
const feedbackCollection = require("./feedbackSchema");
const Message = require("./message.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true, // Optional: if you use cookies/session
    })
  );
  

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://jayanagarakshith:HzBu15b0gRwZ320g@cluster0.k0chl.mongodb.net/rakshithusers", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Failed", err));

app.get("/login", cors(), (req, res) => {});
// ✅ Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Login Attempt:", { email, password });

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            console.log("User not found");
            return res.json({ status: "notexist" });
        }

        console.log("User Found:", user);
        console.log("Stored password in DB:", user.password);

        if (user.password === password) {
            console.log("✅ Password matched. Sending success response.");
            return res.json({
                status: "exist",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            });
        } else {
            console.log("❌ Incorrect password");
            return res.json({ status: "invalid_password" });
        }
    } catch (error) {
        console.error("🔥 Error in login route:", error);
        return res.json({ status: "fail" });
    }
});

  
// ✅ Signup API
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.json("missing_fields");

    try {
        const exists = await User.findOne({ email : email});
        if (exists) return res.json("exist");

        const newUser = new User({ name: name.trim(), email: email.trim(), password: password.trim() });
        await newUser.save();
        res.json("success");
    } catch (e) {
        console.error("❌ Signup Error:", e);
        res.json("fail");
    }
});

// ✅ Feedback API
app.post("/feedback", async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    try {
        const exists = await feedbackCollection.findOne({ email });
        if (exists) return res.json("feedback_exists");

        await feedbackCollection.insertMany([{ firstName, lastName, email, phoneNumber, message }]);
        res.json("feedback_received");
    } catch (e) {
        console.error("❌ Feedback Error:", e);
        res.json("feedback_failed");
    }
});

// ✅ Get All Users
app.get("/users", async (req, res) => {
    console.log("📌 Fetching users...");
    try {
        const users = await User.find({}, { name: 1, email: 1, _id: 1 });
        if (!users.length) return res.status(404).json({ message: "No users found" });

        console.log("👥 Users Retrieved:", users);
        res.status(200).json(users);
    } catch (error) {
        console.error("❌ Error Fetching Users:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// ✅ Fetch Chat History Between Two Users
app.get("/messages/:senderId/:receiverId", async (req, res) => {
    const { senderId, receiverId } = req.params;

    try {
        const messages = await Message.find({
            $or: [
                { senderId, receiverId },
                { senderId: receiverId, receiverId: senderId }
            ]
        }).sort({ timestamp: 1 });

        res.json(messages);
    } catch (error) {
        console.error("❌ Error Fetching Messages:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// ✅ Real-Time Chat Socket.IO
io.on("connection", (socket) => {
    console.log("🟢 New Client Connected:", socket.id);

    // Join a specific chat room
    socket.on("joinRoom", (roomId) => {
        socket.join(roomId);
        console.log(`👥 User joined room: ${roomId}`);
    });

    // Handle sending a message
    socket.on("sendMessage", async ({ senderId, receiverId, message, roomId }) => {
        try {
            const newMessage = new Message({ senderId, receiverId, message });
            await newMessage.save();

            // Emit message to users in the same room
            io.to(roomId).emit("receiveMessage", { senderId, message });
            console.log(`📩 Message sent in room ${roomId}: ${message}`);
        } catch (err) {
            console.error("🚨 Error saving message:", err);
        }
    });

    socket.on("disconnect", () => {
        console.log("❌ A user disconnected:", socket.id);
    });
});

// ✅ Start the Server
server.listen(8000, () => {
    console.log("🚀 Server Running on Port 8000");
});
