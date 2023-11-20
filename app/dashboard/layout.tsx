"use client";

import Sidebar from "@/components/Sidebar";
import { useCollapseContext } from "@/components/provider/collapseProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapse, setCollapse] = useCollapseContext();

  return (
    <div className='bg-white dark:bg-gray-900 relative'>
      <Sidebar />
      <div
        className={`absolute top-0 left-[57px] w-[calc(100vw-57px)] lg:w-[calc(100vw-16rem)] ${
          collapse ? "lg:left-[57px] w-[calc(100vw-57px)] lg:w-[calc(100vw-57px)]" : "lg:left-[16rem] w-[calc(100vw-16rem)]"
        } flex -z-0 px-4 py-4 transition-all`}
      >
        {children}
      </div>
    </div>
  );
}
