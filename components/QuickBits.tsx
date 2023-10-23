import { ArrowRight, Clipboard, Folder, PenTool } from "lucide-react";
import Image from "next/image";
import React from "react";
import Math from "@/public/subjects/math.jpg";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const QuickBits = () => {
  return (
    <div className='flex flex-col gap-3 mt-4'>
      <h1 className='text-lg md:text-3xl font-bold '>What&apos;s for today?</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <div className='w-auto p-4 select-none cursor-pointer bg-green-300 text-green-900 dark:bg-green-600 dark:text-white flex items-center justify-between gap-4 rounded-md transition-colors'>
          <div className='flex gap-2 flex-col'>
            <p className='text-xl font-semibold'>Subjects</p>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold text-3xl'>10</span>
              <span>ACTIVE</span>
            </div>
          </div>
          <div>
            <Folder size={50} strokeWidth={1} />
          </div>
        </div>
        <div className='w-auto p-4 select-none cursor-pointer bg-green-200 text-green-900 dark:bg-green-700 dark:text-white flex items-center justify-between gap-4 rounded-md transition-colors'>
          <div className='flex gap-2 flex-col'>
            <p className='text-xl font-semibold'>Activities</p>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold text-3xl'>6</span>
              <span>DUE TODAY</span>
            </div>
          </div>
          <div>
            <Clipboard size={50} strokeWidth={1} />
          </div>
        </div>
        <div className='w-auto p-4 select-none cursor-pointer bg-green-200 text-green-900 dark:bg-green-700 dark:text-white flex items-center justify-between gap-4 rounded-md transition-colors'>
          <div className='flex gap-2 flex-col'>
            <p className='text-xl font-semibold'>Exams</p>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold text-3xl'>3</span>
              <span>DUE TODAY</span>
            </div>
          </div>
          <div>
            <PenTool size={50} strokeWidth={1} />
          </div>
        </div>
      </div>
      <div className='w-fit p-4 bg-green-300 text-green-900 dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col gap-4'>
        <button className='flex gap-2 font-bold'>
          VIEW ALL SUBJECTS <ArrowRight />
        </button>
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
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Grade 1 Maharlika Average Scores for Quarter 1",
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: true,
        },
        scaleLabel: {
          display: true,
          labelString: "Month",
          color: "#ffffff",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          display: true,
          color: "#ffffff",
        },
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    ],
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Mathematics",
      data: labels.map(() => faker.number.int({ min: 85, max: 95 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Science",
      data: labels.map(() => faker.number.int({ min: 85, max: 95 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "English",
      data: labels.map(() => faker.number.int({ min: 85, max: 95 })),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

export default QuickBits;
