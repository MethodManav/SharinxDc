import { Bolt } from "lucide-react";
import React from "react";
import { ModeChange } from "./ui/theme-button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-primary to-secondary shadow-md">
      <div className="flex items-center gap-3">
        <Bolt className="text-primary w-8 h-8" />
        <div>
          <span className="text-2xl font-extrabold tracking-tight ">
            SharinxDc
          </span>
        </div>
      </div>

      <ModeChange />
    </nav>
  );
};

export default Navbar;
