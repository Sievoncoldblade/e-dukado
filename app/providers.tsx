"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { CollapseProvider } from "@/components/provider/collapseProvider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <CollapseProvider>{children}</CollapseProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
