"use client";
import React from "react";
import { useCollapseContext } from "@/components/provider/collapseProvider";
import Link from "next/link";

const Subjects = () => {
  const [collapse, setCollapse] = useCollapseContext();

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-lg md:text-3xl font-bold '>Grade Levels and Section</h1>
        <div className='w-fit p-4 bg-green-300 text-green-900 dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col gap-4'>
          <Link href='/dashboard/subjects' className='flex gap-2 font-bold'>
            GRADE 1 - MAHARLIKA
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Mathematics</p>
                </div>
                <Link href='/dashboard/subject-test'>
                  <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
                </Link>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Filipino</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Programming</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Science</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>English</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-fit p-4 bg-green-300 text-green-900 dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col gap-4'>
          <Link href='/dashboard/subjects' className='flex gap-2 font-bold'>
            GRADE 1 - MABULAKBOL
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Mathematics</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Filipino</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Programming</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Science</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>English</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-fit p-4 bg-green-300 text-green-900 dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col gap-4'>
          <Link href='/dashboard/subjects' className='flex gap-2 font-bold'>
            GRADE 1 - MABANTOT
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Mathematics</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Filipino</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Programming</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>Science</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
            <div className='max-w-fit select-none p-4 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-green-200 text-green-900'>
              <div className='flex flex-col gap-4 items-start'>
                <div className='flex flex-col'>
                  <p className='text-xl'>English</p>
                </div>
                <button className='rounded-xl px-4 py-2 bg-green-200 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 font-semibold transition-colors'>View Subject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
