'use client';
import React, { useState } from 'react';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#33cccc] to-[#2ba3a3] opacity-40"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#33cccc] rounded-full opacity-30 transform -translate-x-20 -translate-y-20"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#33cccc] rounded-full opacity-20 transform -translate-x-24 -translate-y-24"></div>

      {/* Form */}
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg relative z-10">
        {/* Form Header */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Create an Account
        </h2>
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="e.g., Charlie Brown"
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-[#33cccc] focus:outline-none"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-[#33cccc] focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-[#33cccc] focus:outline-none"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#33cccc] text-white font-medium rounded-lg hover:bg-[#2ba3a3] transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <div className="flex justify-center mt-4">
          <a
            href="/login"
            className="text-sm text-[#33cccc] hover:underline focus:outline-none"
          >
            Already have an account? Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
