'use client';
import React, { createContext, useState } from 'react';
import Login from '../Login/Login';

type GetSession = (email:string, password: string) => Promise<string>;

export const SessionContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const SessionProvider = ({ children }: Props) => {
  const getSession: GetSession = async (email: string, password: string) => {
    console.log(email, password);
    const session = await Login({ email, password });
    return session;
  };

  return (
    <SessionContext.Provider value={{ getSession }}>
      {children}
    </SessionContext.Provider>
  );
};
