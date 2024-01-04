'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './form.module.css';
import classNames from 'classnames';
import { SessionContext } from '@/app/utils/context/sessionContext';
type Props = {
  // checkToken: (token: string) => void;
};
const SignInSchema = z.object({
  email: z.string().email({ message: 'כתובת אימייל לא תקינה' }),
  password: z
    .string()
    .min(6, { message: 'על הסיסמה להכיל לפחות שישה תווים' })
    .max(20, { message: 'על הסיסמה להכיל לכל היותר עשרים תווים' }),
});
type SignInSchemaType = z.infer<typeof SignInSchema>;

export default function Form({}: Props) {
  const { getSession } = useContext(SessionContext);

  const onSubmit: SubmitHandler<SignInSchemaType> = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const session = await getSession(email, password);
    console.log(session);
    if (!session) throw new Error('No session');

    // checkToken(session.accessToken);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputsContainer}>
        <div className={styles.inputContainer}>
          <input
            className={classNames({ [styles.errorInput]: errors.email })}
            placeholder="אימייל"
            {...register('email')}
          />
          {errors.email && (
            <span className={styles.errorSpan}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            className={classNames({ [styles.errorInput]: errors.password })}
            placeholder="סיסמה"
            {...register('password')}
          />
          {errors.password && (
            <span className={styles.errorSpan}>{errors.password.message}</span>
          )}
        </div>
      </div>
      <button className={styles.submitBtn} type="submit">
        התחבר
      </button>
    </form>
  );
}
