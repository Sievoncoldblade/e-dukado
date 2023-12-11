import Activity from "@/components/Activity";
import Link from "next/link";
import React from "react";

const SubjectTestPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className=' bg-green-500 text-white dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col justify-end h-32 py-2 px-4'>
        <div className='font-bold text-2xl'>MAHARLIKA</div>
        <div className='font-medium '>Grade 1</div>
      </div>
      <div className='flex flex-col gap-4'>
        <Activity name='Owen Harvey B.' activity='Activity 1: Arithmetic' date='Nov 19, 2023' />
        <Activity name='Owen Harvey B.' activity='Activity 2: Algebra' date='Nov 20, 2023' />
        <Activity name='Owen Harvey B.' activity='Activity 3: Linear Equation' date='Nov 21, 2023' />
        <Activity name='Owen Harvey B.' activity='Activity 4: Do the thing?' date='Nov 21, 2023' />
        <Activity name='Owen Harvey B.' activity='Activity 5: Observation Worksheet' date='Nov 23, 2023' />
      </div>
    </div>
  );
};

export default SubjectTestPage;
