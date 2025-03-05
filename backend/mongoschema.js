const mongoose = require('mongoose');
// Signup Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Feedback Schema
// const feedbackSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: String,
//         required: true
//     },
//     message: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// Create models from schemas
const User =new mongoose.model('User', userSchema);
// const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = User;
