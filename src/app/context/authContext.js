'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Account } from 'appwrite';
import { client } from '@/app/appwrite';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const account = new Account(client);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await account.get();
        setUser(response);
      } catch {
        setUser(null);
      }
    };
    checkUser();
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
