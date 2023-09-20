"use client";

import React from "react";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { useCollapseContext } from "./provider/collapseProvider";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [collapse, setCollapse] = useCollapseContext();

  return (
    <div
      className={`sticky w-[57px] ${
        collapse ? "lg:w-[57px] lg:px-0" : "lg:w-[16rem] lg:px-8"
      } justify-start border-r dark:border-gray-500 h-screen flex flex-col left-0 top-0 gap-3 transition-all pt-16 `}
    >
      <Menu className='absolute right-3 top-3 hover:cursor-pointer hidden lg:inline text-green-900' size={30} onClick={() => setCollapse(!collapse)} />

      <Link href='/dashboard' className={`hidden ${collapse ? "lg:hidden" : "lg:block"}  mb-5`}>
        <Logo className='fill-green-600' alt='logo' />
      </Link>
      <SidebarItem href='/dashboard' text='Dashboard' icon='layout-dashboard' />
      <SidebarItem href='/dashboard/subjects' text='Subjects' icon='folder' />
      <SidebarItem href='/dashboard/exams' text='Examinations' icon='pen-tool' />
      <SidebarItem href='/dashboard/lessons' text='Lessons' icon='sticky-note' />
      <SidebarItem href='/dashboard/activities' text='Activities' icon='clipboard' />
      <SidebarItem href='/dashboard/calendar' text='Calendar' icon='calendar' />
      <SidebarItem href='/dashboard/reports' text='Reports' icon='line-chart' />
      <SidebarItem href='/dashboard/settings' text='Settings' icon='settings' />
    </div>
  );
};

export default Sidebar;
