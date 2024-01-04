'use client';
import React, { Dispatch, ReactNode, createContext, useContext, useState } from 'react';
import Login from '../Login/Login';

type User = { email: string; password: string };
type Session = { user: User; accessToken: string };

export const AuthContext = createContext({
  user: { email: '', password: '' },
  getSession: async (email: string, password: string) => {},
  setUser: (user: User) => {},
});
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User>({ email: '', password: '' });

  const getSession = async (email: string, password: string) => {
    try {
      console.log(email)
      const res = await Login({ email, password });
      console.log(res);
      if (res) {
        setUser({ email, password });
        setSession(res);
      } else {
        console.log('adfasdf')
        setSession(null);

        setUser({ email: '', password: '' });
      }
    } catch (error) {
      console.log(error);
      setSession(null);
      setUser({ email: '', password: '' });
    }
  };

  const contextValue = {
    user,
    getSession,
    setUser,
  };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
