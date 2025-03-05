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
        message
      });

      if (res.status === 200) {
        setSuccess("Thank you for your feedback!");
        setFirstName(""); // Clear form after success
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        
      }
    } catch (error) {
      setError("An error occurred while submitting your feedback. Please try again.");
      console.log(error);
    }
  }

  return (
    <>
      <div className="relative z-10 bg-white shadow-lg rounded-lg">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-4 max-w-7xl py-12 md:py-3">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              <div className="flex items-center justify-center form-styled">
                <div className="px-2 md:px-12 ml-50">
                  <p className="text-2xl font-bold text-styled md:text-4xl ml-6 text-black">
                    Share Your Feedback
                  </p>
                  <p className="mt-4 text-lg text-styled ml-6 text-black">
                    Our friendly team would love to hear from you.
                  </p>
                  <form className="mt-8 space-y-4 ml-6" onSubmit={submit}>
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div className="grid w-full items-center gap-1.5">
                        <label className="text-sm font-medium leading-none text-styled text-black" htmlFor="first_name">
                          First Name
                        </label>
                        <input
                          className="input-styled flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <label className="text-sm font-medium leading-none text-styled text-black" htmlFor="last_name">
                          Last Name
                        </label>
                        <input
                          className="input-styled flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-styled text-black" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="input-styled flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        type="text"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-styled text-black" htmlFor="phone_number">
                        Phone number
                      </label>
                      <input
                        className="input-styled flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        type="tel"
                        id="phone_number"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-styled text-black" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="input-styled flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        id="message"
                        placeholder="Leave us a message"
                        cols="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    <button
                      type="submit"
                      onClick={submit}
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
