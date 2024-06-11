// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserByEmailPassword } from '../database/database'; // Adjust the import path according to your project structure

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }:any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // You can add logic to fetch the currently logged-in user if necessary
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email:string, password:string) => {
    try {
      const user = await getUserByEmailPassword(email, password);
      if (user) {
        setUser(user);
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
