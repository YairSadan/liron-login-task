'use client';
import React from 'react';
import Validate from '../utils/session/Validate';

type Props = {};

export default function page({}: Props) {
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
