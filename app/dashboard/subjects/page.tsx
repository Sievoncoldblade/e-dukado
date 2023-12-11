"use client";
import React from "react";
import ProfileBar from "@/components/ProfileBar";
import { useCollapseContext } from "@/components/provider/collapseProvider";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SubjectBox from "@/components/SubjectBox";

const Subjects = () => {
  const [collapse, setCollapse] = useCollapseContext();

  return (
    <div>
      <ProfileBar />
      <div className='flex flex-col gap-4 mt-8'>
        <h1 className='text-lg md:text-3xl font-bold '>Grade Levels and Section</h1>
        <div className='w-fit p-4 bg-green-300 text-green-900 dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col gap-4'>
          <Link href='/dashboard/subjects' className='flex gap-2 font-bold'>
            GRADE 1 - MAHARLIKA
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            <SubjectBox subject='Mathematics' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Filipino' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Programming' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Science' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='English' subjectLink='/dashboard/subject-test' />
          </div>
        </div>
        <div className='w-fit p-4 bg-green-300 text-green-900 dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col gap-4'>
          <Link href='/dashboard/subjects' className='flex gap-2 font-bold'>
            GRADE 1 - MABULAKBOL
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            <SubjectBox subject='Mathematics' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Filipino' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Programming' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Science' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='English' subjectLink='/dashboard/subject-test' />
          </div>
        </div>
        <div className='w-fit p-4 bg-green-300 text-green-900 dark:bg-green-600 dark:text-white rounded-md transition-colors flex flex-col gap-4'>
          <Link href='/dashboard/subjects' className='flex gap-2 font-bold'>
            GRADE 1 - MABANTOT
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            <SubjectBox subject='Mathematics' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Filipino' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Programming' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='Science' subjectLink='/dashboard/subject-test' />
            <SubjectBox subject='English' subjectLink='/dashboard/subject-test' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
