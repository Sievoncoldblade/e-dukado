"use client";
import React from "react";
import ProfileBar from "@/components/ProfileBar";
import { useCollapseContext } from "@/components/provider/collapseProvider";

const Subjects = () => {
  const [collapse, setCollapse] = useCollapseContext();

  return (
    <div
      className={`absolute top-0 left-[57px] w-[calc(100vw-57px)] lg:w-[calc(100vw-16rem)] ${
        collapse ? "lg:left-[57px] w-[calc(100vw-57px)] lg:w-[calc(100vw-57px)]" : "lg:left-[16rem] w-[calc(100vw-16rem)]"
      } flex -z-0 px-4 py-4 transition-all`}
    >
      <ProfileBar />
      <div className='mt-5'>
        <div className='min-h-[7.5rem] flex items-center px-4 bg-green-500 text-white text-3xl font-bold rounded-lg '>mathematics</div>
      </div>
    </div>
  );
};

export default Subjects;
