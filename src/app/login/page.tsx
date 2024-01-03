import React from 'react';
import styles from './page.module.css';
import Form from './form/Form';
import Validate from '../utils/session/Validate';
import { redirect } from 'next/navigation';
type Props = {};

export default function LoginPage({}: Props) {
  const jwtRedirect = async (token: string) => {
    'use server';
    // await Validate({ token });
    redirect('/home');
  };
  return (
    <footer className={styles.container}>
      <h1>ברוכים הבאים</h1>
      <div className={styles.formContainer}>
        <Form checkToken={jwtRedirect} />
      </div>
    </footer>
  );
}
