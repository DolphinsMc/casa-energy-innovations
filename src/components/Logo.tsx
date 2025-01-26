import React from "react";
import { Building } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Building className="w-6 h-6 text-primary" />
      <div className="text-2xl font-bold text-foreground">
        <span className="text-primary">CASA</span>
      </div>
    </div>
  );
};