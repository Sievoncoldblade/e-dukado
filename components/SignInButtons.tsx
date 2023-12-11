"use client";

import React from "react";
import SignInButton from "./SignInButton";

const SignInButtons = () => {
  return (
    <div className='flex gap-4'>
      <SignInButton href='/teacher/login' text='Sign in as Teacher' bgColor='bg-green-500' />
      <SignInButton href='/student/login' text='Sign in as Student' bgColor='bg-yellow-500' />
    </div>
  );
};

export default SignInButtons;
