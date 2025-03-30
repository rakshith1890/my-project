const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    trim: true, 
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Email format validation
  },
  phoneNumber: { 
    type: String, 
    required: true, 
    trim: true, 
    match: /^\d{10}$/ // Ensures exactly 10 digits
  },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

// Create and export the model
const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
