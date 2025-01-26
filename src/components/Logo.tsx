import React from "react";
import { Building } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Building className="w-6 h-6 text-[#28395D]" />
      <div className="text-3xl font-bold text-white">
        <span className="text-secondary">CASA</span>
      </div>
    </div>
  );
};