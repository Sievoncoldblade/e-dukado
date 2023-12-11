"use client";
import ProfileBar from "@/components/ProfileBar";
import QuickBits from "@/components/QuickBits";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <QuickBits />
    </div>
  );
};

export default Dashboard;
