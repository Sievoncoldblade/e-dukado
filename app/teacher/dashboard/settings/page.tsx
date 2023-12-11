import React from "react";

const Settings = () => {
  return (
    <div>
      <h1 className='text-lg md:text-3xl font-bold '>Account Settings</h1>
      <form action='#' method='post'>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Owen Harvey'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-gray-900'>
              Last name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                autoComplete='family-name'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Balocon'
              />
            </div>
          </div>

          <div className='sm:col-span-4'>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='owenharvey@gmail.com'
              />
            </div>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button type='button' className='text-sm font-semibold leading-6 text-gray-900'>
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
