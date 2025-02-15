
import React from "react";
import { Building } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Building className="w-6 h-6 text-secondary" />
      <div className="text-2xl font-bold text-secondary">
        CASA
      </div>
    </div>
  );
};
