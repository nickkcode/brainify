'use client';

import React, { useState } from 'react';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { account } from '../appwrite';

const LoginPage= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const validateForm = () => {
    if (!email || !password) {
      setError('Both email and password are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const login = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);
      setEmail('');
      setPassword('');
      router.push('/home');
    } catch {
      setError('Login failed. Please check your credentials.');
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setLoggedInUser(null);
    } catch {
      setError('Logout failed. Please try again.');
    }
  };

  if (loggedInUser) {
    return (
      <BackgroundBeamsWithCollision className="min-h-screen">
        <div className="max-w-screen-lg flex bg-black/5 rounded-lg backdrop-blur-sm shadow-2xl z-10 flex-col text-center py-12 items-center">
          <h1 className="text-2xl font-semibold mb-4">
            Welcome, {loggedInUser.name}
          </h1>
          <button
            type="button"
            onClick={logout}
            className="text-center cursor-pointer border-2 border-[#33cccc] rounded-lg text-sm text-[#33cccc] px-4 py-2 hover:bg-[#33cccc] transition-all hover:text-black active:scale-110"
          >
            Logout
          </button>
        </div>
      </BackgroundBeamsWithCollision>
    );
  }

  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
      <div className="max-w-screen-lg flex bg-black/5 rounded-lg backdrop-blur-sm shadow-2xl z-10 flex-col text-center py-12 items-center">
        <h1 className="md:text-xl text-2xl font-semibold md:px-64 px-16">
          Log into your Account
        </h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={login} className="md:w-1/2 mt-8 mb-4">
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-12 px-5 rounded-lg text-sm focus:outline-none focus:bg-[#28272a]"
              aria-label="Password"
            />
          </div>

          <button
            type="submit"
            className={`text-center cursor-pointer border-2 border-[#33cccc] rounded-lg text-sm text-[#33cccc] px-4 py-2 hover:bg-[#33cccc] transition-all hover:text-black active:scale-110 ${!email || !password ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!email || !password}
          >
            Log in
          </button>
        </form>

        <div className="flex justify-evenly md:w-1/2 text-xs">
          <a
            href="/forgot-password"
            className="hover:text-[#33cccc] p-5 text-white/25 transition-all"
          >
            Forget Password?
          </a>

          <a
            href="/signup"
            className="hover:text-[#33cccc] p-5 text-white/25 transition-all"
          >
            New to Brainify?
          </a>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default LoginPage;
