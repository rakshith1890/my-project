const express = require("express");
const User = require("./mongoschema"); 
const feedbackCollection = require("./feedbackSchema");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb+srv://jayanagarakshith:HzBu15b0gRwZ320g@cluster0.k0chl.mongodb.net/rakshithusers")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed");
    });

app.get("/login", cors(), (req, res) => {});

// **LOGIN API**
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    console.log("Login Attempt:", { email, password });

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            console.log("User not found!");
            return res.json("notexist");
        }

        console.log("Stored password in DB:", user.password);

        if (user.password === password) {
            console.log("Login successful!");
            return res.json("exist");
        } else {
            console.log("Incorrect password!");
            return res.json("invalid_password");
        }
    } catch (e) {
        console.error("Server error:", e);
        return res.json("fail");
    }
});

// **SIGNUP API**
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    console.log("Received Data:", { name, email, password });

    if (!name || !email || !password) {
        console.log("Missing fields!");
        return res.json("missing_fields");
    }

    try {
        const check = await User.findOne({ email: email });

        if (check) {
            console.log("User already exists:", check);
            return res.json("exist");
        } else {
            const newUser = new User({
                name: name.trim(), // ✅ Now correctly storing name
                email: email.trim(),
                password: password.trim()
            });

            await newUser.save();
            console.log("User successfully saved:", newUser);
            res.json("success");
        }
    } catch (e) {
        console.error("Signup Error:", e);
        res.json("fail");
    }
});

// **FEEDBACK API**
app.post("/feedback", async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    const feedbackData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
    };

    try {
        const check = await feedbackCollection.findOne({ email: email });

        if (check) {
            res.json("feedback_exists");
        } else {
            await feedbackCollection.insertMany([feedbackData]);
            res.json("feedback_received");
        }
    } catch (e) {
        console.log(e);
        res.json("feedback_failed");
    }
});

//get user data
app.get("/users", async (req, res) => {
    try {
        const users = await User.find({}, { name: 1, email: 1, _id: 1 }); // Fetch only name and email
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(8000, () => {
    console.log("port connected");
});
