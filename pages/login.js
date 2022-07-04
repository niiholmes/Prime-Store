import Link from 'next/link';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password, 
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div>
      <form
        className="mx-auto max-w-screen-md ml-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-md text-center mt-10">Login</h1>
        <div className="mb-4 ml-5 mr-5">
          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-z-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter a valid email address',
              },
            })}
            className="w-full border"
            id="email"
            autoFocus
            type="email"
          ></input>
          {errors.email && (
            <div className="text-red-700 text-xs">{errors.email.message}</div>
          )}
          <div className=" ">
            <label htmlFor="password" className="text-xs">
              Password
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Please enter a password',
                minLength: {
                  value: 6,
                  message: 'password is must be more than 5 chars',
                },
              })}
              className="w-full border"
              id="password"
              autoFocus
            ></input>
            {errors.password && (
              <div className="text-red-700 text-xs">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-4 ">
            <button className="w-full bg-yellow-500 rounded-xl  p-2  text-xs mt-4">
              Login
            </button>
          </div>
          <div className="mb-4 text-xs">
            Don&apos;t have an account? &nbsp;
            <Link href="register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
