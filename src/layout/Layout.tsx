import React from "react";
import { Footer } from "./Footer";
import { Topbar } from "./Topbar";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen md:h-screen md:overflow-hidden bg-slate-300">
            <div className="md:overflow-hidden">
                <Topbar />
                    <main className="overflow-y-auto">
                        {children}
                    </main>
                <Footer />
            </div>
        </div>
    );
}