import React from "react";

const RecentSubjects = () => {
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
        <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
          <div className='flex flex-col gap-4 items-start'>
            <div className='flex flex-col'>
              <p className='text-xl'>Mathematics</p>
              <p className='text-sm'>Grade 1 Maharlika</p>
            </div>
            <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
          </div>
        </div>
        <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
          <div className='flex flex-col gap-4 items-start'>
            <div className='flex flex-col'>
              <p className='text-xl'>Filipino</p>
              <p className='text-sm'>Grade 1 Maharlika</p>
            </div>
            <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
          </div>
        </div>
        <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
          <div className='flex flex-col gap-4 items-start'>
            <div className='flex flex-col'>
              <p className='text-xl'>Programming</p>
              <p className='text-sm'>Grade 1 Maharlika</p>
            </div>
            <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
          </div>
        </div>
        <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
          <div className='flex flex-col gap-4 items-start'>
            <div className='flex flex-col'>
              <p className='text-xl'>Science</p>
              <p className='text-sm'>Grade 1 Maharlika</p>
            </div>
            <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
          </div>
        </div>
        <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
          <div className='flex flex-col gap-4 items-start'>
            <div className='flex flex-col'>
              <p className='text-xl'>English</p>
              <p className='text-sm'>Grade 1 Maharlika</p>
            </div>
            <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSubjects;
