"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { CollapseProvider } from "@/components/provider/collapseProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <CollapseProvider>{children}</CollapseProvider>
    </ThemeProvider>
  );
};

export default Providers;
