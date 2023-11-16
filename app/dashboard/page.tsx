"use client";
import ProfileBar from "@/components/ProfileBar";
import QuickBits from "@/components/QuickBits.1";
import { useCollapseContext } from "@/components/provider/collapseProvider";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const [collapse, setCollapse] = useCollapseContext();

  return (
    <div
      className={`absolute top-0 left-[57px] w-[calc(100vw-57px)] lg:w-[calc(100vw-16rem)] ${
        collapse ? "lg:left-[57px] w-[calc(100vw-57px)] lg:w-[calc(100vw-57px)]" : "lg:left-[16rem] w-[calc(100vw-16rem)]"
      } flex -z-0 px-4 py-4 transition-all`}
    >
      <ProfileBar />
      <QuickBits />
    </div>
  );
};

export default Dashboard;
