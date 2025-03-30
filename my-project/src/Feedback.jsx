import { useState } from "react";
import axios from "axios";

function Feedback() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [success, setSuccess] = useState(""); // To store success messages

  // Form submit handler
  async function submit(e) {
    e.preventDefault();
    setError(""); // Clear previous error
    setSuccess(""); // Clear previous success message

    // Basic validation
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/feedback", {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });

      if (res.status === 200) {
        setSuccess("Thank you for your feedback!");
        setFirstName(""); // Clear form after success
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        setError("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while submitting your feedback. Please try again.");
      console.error("Feedback submission error:", error);
    }
  }

  return (
    <div className="relative z-10 bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-black">Share Your Feedback</h2>
      <p className="mt-2 text-lg text-center text-gray-600">
        Our friendly team would love to hear from you.
      </p>
      <form className="mt-6 space-y-4" onSubmit={submit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="first_name">
              First Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-gray-400 focus:outline-none"
              type="text"
              id="first_name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="last_name">
              Last Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-gray-400 focus:outline-none"
              type="text"
              id="last_name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-gray-400 focus:outline-none"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="phone_number">
            Phone Number
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-gray-400 focus:outline-none"
            type="tel"
            id="phone_number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{10}" // Accepts only 10-digit numbers
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-gray-400 focus:outline-none"
            id="message"
            placeholder="Leave us a message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white rounded-md p-2 text-sm font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Feedback;
