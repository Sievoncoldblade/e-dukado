import RegisterForm from "@/components/RegisterForm";
import React from "react";

const Login = () => {
  return (
    <div className='bg-green-500 h-screen flex '>
      <div className='w-full md:w-1/2 px-4 py-16 sm:px-6 lg:px-8 flex flex-col justify-center items-center bg-white'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl text-green-500 '>Register</h1>

          <p className='mt-4 text-gray-500'></p>
        </div>
        <div className='min-w-fit w-96 px-2'>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
