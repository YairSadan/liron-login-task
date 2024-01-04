'use client';
import React from 'react';
import { useSessionContext } from '../utils/context/sessionContext';

type Props = {};

export default function HomePage({}: Props) {
  const { session } = useSessionContext();
  console.log(session);
  return (
    <div>
      <button
        onClick={async () => {
          await fetch('https://rest-api.lamdem.co.il/v1/ping-auth', {
            method: 'HEAD',
            headers: {
              Authorization: `Bearer ${session?.accessToken}` 
            },
            credentials: 'include',
          });
        }}>
        {' '}
        Ping Auth
      </button>
      home
    </div>
  );
}
