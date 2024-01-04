'use client';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type GetSession = (email: string, password: string) => Promise<void>;

type Props = {
  children: React.ReactNode;
};
interface SessionContextInterface {
  session: SessionModel | null;
  setSession: Dispatch<SetStateAction<SessionModel | null>>;
}

const defaultValue = {
  session: null,
  setSession: async (session: SessionModel) => {
    /* Default implementation */
  },
} as SessionContextInterface;

export const SessionContext = createContext(defaultValue);

export const SessionProvider = ({ children }: Props) => {
  const [session, setSession] = useState<SessionModel | null>(null);

  // const makeSession = async (session: SessionModel) => {
  //   // const session = await Login({ email, password });
  //   console.log(session);
  //   setSession(session);
  // };

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
