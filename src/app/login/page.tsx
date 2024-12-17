'use client';
import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // Show feedback popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFeedbackPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handlePopupClick = () => {
    setShowFeedbackForm(true);
    setShowFeedbackPopup(false);
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', { rating, feedback });
    setShowFeedbackForm(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#33cccc] to-[#2ba3a3] opacity-40"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#33cccc] rounded-full opacity-30 transform -translate-x-20 -translate-y-20"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#33cccc] rounded-full opacity-20 transform -translate-x-24 -translate-y-24"></div>

      {/* Left Column: Form */}
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          {/* Form Header */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
            Welcome Back!
          </h2>
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g., charlie.brown@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-[#33cccc] focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-[#33cccc] focus:outline-none"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#33cccc] text-white font-medium rounded-lg hover:bg-[#2ba3a3] transition duration-200"
            >
              Log In
            </button>
          </form>

          {/* Forgot Password & Link to Signup */}
          <div className="flex justify-between mt-4">
            <a
              href="#"
              className="text-sm text-[#33cccc] hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
            <a
              href="/signup"
              className="text-sm text-[#33cccc] hover:underline focus:outline-none"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Feedback Popup */}
      {showFeedbackPopup && (
        <div
          className="fixed bottom-6 right-6 bg-[#33cccc] text-white p-4 rounded-lg shadow-lg cursor-pointer animate-bounce"
          onClick={handlePopupClick}
        >
          <p className="text-sm">We value your feedback! Click to share.</p>
        </div>
      )}

      {/* Feedback Form Modal */}
      {showFeedbackForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Share Your Feedback
            </h2>
            <div className="mb-4">
              <label className="block text-lg mb-2 text-gray-600 dark:text-gray-300">
                Rate Your Experience:
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="rating"
                      value={value}
                      checked={rating === value}
                      onChange={handleRatingChange}
                      className="mr-1"
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="feedback"
                className="block text-lg mb-2 text-gray-600 dark:text-gray-300"
              >
                Your Feedback:
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={handleFeedbackChange}
                rows={4}
                placeholder="Let us know your thoughts"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-[#33cccc] focus:outline-none"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSubmitFeedback}
                className="py-2 px-4 bg-[#33cccc] text-white font-medium rounded-lg hover:bg-[#2ba3a3] transition duration-200"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
