'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { Client, Account, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('6766a1e6003da77b10fe'); 

const account = new Account(client);

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const validateForm = () => {
    if (!email || !password || !name) {
      setError('All fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await account.create(ID.unique(), email, password, name);
      setEmail('');
      setPassword('');
      setname('');
      router.push('/prompt');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <BackgroundBeamsWithCollision className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg flex bg-black/5 rounded-lg backdrop-blur-sm shadow-2xl z-10 flex-col text-center py-12 items-center">
        <h1 className="md:text-xl text-2xl font-semibold md:px-64 px-16">
          Create your account
        </h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="md:w-1/2 mt-8 mb-4">
          <div className="relative mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-12 px-5 rounded-lg text-sm focus:outline-none focus:bg-[#28272a]"
              aria-label="Email Address"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your name"
              className="w-full h-12 px-5 rounded-lg text-sm focus:outline-none focus:bg-[#28272a]"
              aria-label="name"
            />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Set a password"
              className="w-full h-12 px-5 rounded-lg text-sm focus:outline-none focus:bg-[#28272a]"
              aria-label="Password"
            />
          </div>

          <button
            type="submit"
            className={`text-center cursor-pointer border-2 border-[#33cccc] rounded-lg text-sm text-[#33cccc] px-4 py-2 hover:bg-[#33cccc] transition-all hover:text-black active:scale-110 ${
              !email || !password || !name ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!email || !password || !name}
          >
            Sign up
          </button>
        </form>

        <a
          href="/login"
          className="hover:text-[#33cccc] text-white/25 text-xs p-5 transition-all"
        >
          Already have an account?
        </a>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default SignupPage;
