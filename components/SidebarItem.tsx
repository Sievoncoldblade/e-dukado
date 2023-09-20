"use client";

import Link from "next/link";
import React from "react";
import SidebarIcon from "./SidebarIcon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { usePathname } from "next/navigation";
import { useCollapseContext } from "./provider/collapseProvider";

interface SidebarItemProps {
  icon: keyof typeof dynamicIconImports;
  text: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, href }) => {
  const pathname = usePathname();
  const [collapse, setCollapse] = useCollapseContext();
  return (
    <Link
      href={href}
      tabIndex={1}
      className={`px-4 py-4 ${
        pathname == href ? "bg-green-200 dark:bg-green-700" : ""
      } text-green-900 dark:text-green-100 dark:hover:bg-green-600 hover:bg-green-300 text-lg font-semibold cursor-pointer flex gap-4 items-start group transition-all ease-in rounded-lg `}
    >
      <span>
        <SidebarIcon name={icon} />
      </span>
      <span className={`group-hover:translate-x-1 transition-all ease-in hidden ${collapse ? "lg:hidden" : "lg:inline"}`}>{text}</span>
    </Link>
  );
};

export default SidebarItem;
