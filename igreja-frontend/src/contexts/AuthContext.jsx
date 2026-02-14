import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('@ADTC:token');
    const savedUser = localStorage.getItem('@ADTC:user');

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  async function signIn({ email, password }) {
    const response = await api.post('/auth/login', { email, password });
    const { token, user } = response.data;

    localStorage.setItem('@ADTC:token', token);
    localStorage.setItem('@ADTC:user', JSON.stringify(user));

    setUser(user);
  }

  function signOut() {
    localStorage.removeItem('@ADTC:token');
    localStorage.removeItem('@ADTC:user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading, authenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}