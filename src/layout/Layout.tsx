import React from "react";
import { Footer } from "./Footer";
import { Topbar } from "./Topbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen md:h-screen flex flex-col md:overflow-hidden bg-[#0c0d14] bg-radial-[at_75%_45%] from-indigo-800/70 via-[#151336] to-[#0a0b10]">
      <Topbar />

      <div className="flex-1 overflow-y-auto">
        <main className="">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
