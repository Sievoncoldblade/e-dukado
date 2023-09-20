"use client";

import { signIn } from "next-auth/react";
import React from "react";

const SignInButtons = () => {
  return (
    <div className='flex gap-4'>
      <button className='p-2 bg-green-500 rounded-lg text-white' onClick={() => signIn()}>
        Sign in as Teacher
      </button>
      <button className='p-2 bg-yellow-500 rounded-lg text-white' onClick={() => signIn()}>
        Sign in as Student
      </button>
    </div>
  );
};

export default SignInButtons;
