const express = require("express");
const router = express.Router();
const Message = require("./message.js"); // ✅ Ensure correct path

// **Get conversation between two users**
router.get("/:user1/:user2", async (req, res) => {
    const { user1, user2 } = req.params;
    try {
        const messages = await Message.find({
            $or: [
                { senderId: user1, receiverId: user2 },
                { senderId: user2, receiverId: user1 }
            ]
        }).sort({ timestamp: 1 });

        res.status(200).json(messages);
    } catch (error) {
        console.error("❌ Error fetching messages:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// **Send a new message**
router.post("/", async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    if (!senderId || !receiverId || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const newMessage = new Message({ senderId, receiverId, message });
        await newMessage.save();
        res.status(201).json({ success: true, message: "Message sent" });
    } catch (error) {
        console.error("❌ Error sending message:", error);
        res.status(500).json({ error: "Failed to send message" });
    }
});

module.exports = router; // ✅ Ensure this is `router`, not `{}` or an object
