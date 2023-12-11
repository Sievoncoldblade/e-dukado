import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className=''>
        <div className='mx-auto mt-36 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-lg text-center'>
            <h1 className='text-2xl font-bold sm:text-3xl'>Sign in</h1>

            <p className='mt-4 text-gray-500'></p>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
