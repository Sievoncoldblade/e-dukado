"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types/Inputs";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
      <div>
        <div className='relative'>
          {errors.email && <span>This field is required</span>}

          <input {...register("email", { required: true })} type='email' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border' placeholder='Enter email' />

          <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
            {/* <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
            </svg> */}
          </span>
        </div>
      </div>

      <div>
        <div className='relative'>
          {errors.password && <span>This field is required</span>}

          <input {...register("password", { required: true })} type='password' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border' placeholder='Enter password' />

          <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
            {/* <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg> */}
          </span>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>
          No account?
          <Link className='underline ml-1' href=''>
            Sign up
          </Link>
        </p>

        <button type='submit' className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
