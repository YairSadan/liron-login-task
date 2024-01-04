'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './form.module.css';
import classNames from 'classnames';
import {
  SessionContext,
  useSessionContext,
} from '@/app/utils/context/sessionContext';
import Login from '@/app/utils/Login/Login';
import Validate from '@/app/utils/session/Validate';
import { setEngine } from 'crypto';
import { useRouter } from 'next/navigation';
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
  const { setSession } = useSessionContext();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInSchemaType> = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const session: SessionModel = await Login({ email, password });
    setSession(session);
    if (!session) throw new Error('No session');
    const token = session.accessToken;
    await Validate({ token });
    router.push('/home');
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
          {errors.email && <span className={styles.errorSpan}>{errors.email.message}</span>}
        </div>
        <div className={styles.inputContainer}>
          <input
            className={classNames({ [styles.errorInput]: errors.password })}
            placeholder="סיסמה"
            {...register('password')}
          />
          {errors.password && <span className={styles.errorSpan}>{errors.password.message}</span>}
        </div>
      </div>
      <button className={styles.submitBtn} type="submit">
        התחבר
      </button>
    </form>
  );
}
