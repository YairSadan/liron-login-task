import React from 'react';
import styles from './page.module.css';
import Form from './form/Form';
type Props = {};

export default function LoginPage({}: Props) {
  return (
    <footer className={styles.container}>
      <h1>ברוכים הבאים</h1>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </footer>
  );
}
