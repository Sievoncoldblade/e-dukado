"use client";

import { signIn } from "next-auth/react";
import React from "react";

const SignInButtons = () => {
  return (
    <button className='p-2 px-8 bg-green-500 rounded-lg text-white' onClick={() => signIn()}>
      Join Now!
    </button>
  );
};

export default SignInButtons;
