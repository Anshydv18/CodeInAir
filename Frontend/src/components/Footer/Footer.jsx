import React, { useState } from "react";

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Rating:", rating);
    console.log("Message:", message);
    // Optionally, reset the form
    setName("");
    setRating(0);
    setMessage("");
  };

  return (
    
<div  className="px-16 mt-6">
<footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are committed to providing the best service to our customers.
              Your feedback helps us improve.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>

          {/* Rate Us Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Rate Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
                  required
                />
              </div>
              {/* Star Rating */}
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className={`text-2xl ${
                      star <= rating ? "text-yellow-500" : "text-gray-400"
                    } focus:outline-none`}
                  >
                    ★
                  </button>
                ))}
              </div>
              {/* Message Input */}
              <textarea
                placeholder="Leave a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-black"
                required
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; 2024 Your Company. All rights are claimed.</p>
        </div>
      </div>
    </footer>
</div>
  );
};

export default Footer;
