'use client';
import React, { useContext } from 'react';
import { AuthContext } from '../utils/context/sessionContext';

type Props = {};

export default function Page({ }: Props) {
  const { user, getSession, setUser } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <button
        onClick={async () => {
          await fetch('https://rest-api.lamdem.co.il/v1/ping-auth', {
            method: 'HEAD',
            credentials: 'include',
          });
        }}>
        {' '}
        Ping Auth
      </button>
      <button
        onClick={async () => {
          await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
          });
        }}>
        {' '}
        Gwt post
      </button>
      home
    </div>
  );
}
