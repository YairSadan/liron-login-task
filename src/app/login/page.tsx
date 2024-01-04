'use client';
import React from 'react';
import styles from './page.module.css';
import Form from './form/Form';
import Validate from '../utils/session/Validate';
type Props = {};

export default function LoginPage({}: Props) {
  // const jwtRedirect = async (token: string) => {
  //   'use server';
  //   await Validate();
  // redirt('/home)
  // };
  return (
    <footer className={styles.container}>
      <h1>ברוכים הבאים</h1>
      <button
        onClick={async () => {
          await fetch('https://rest-api.lamdem.co.il/v1/ping-auth', {
            method: 'HEAD',
            credentials: 'include',
          });
        }}>
        Ping auth
      </button>{' '}
      <button
        onClick={async () => {
          await fetch(`/home`, {
            method: 'POST',
            credentials: 'include',
          });
        }}>
        Get /home
      </button>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </footer>
  );
}
