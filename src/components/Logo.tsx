
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div 
        className="text-2xl font-bold relative"
        style={{
          transform: "perspective(500px) rotateX(10deg)",
          textShadow: `
            1px 1px 2px rgba(0,0,0,0.2),
            2px 2px 2px rgba(0,0,0,0.2),
            3px 3px 3px rgba(0,0,0,0.2),
            4px 4px 4px rgba(0,0,0,0.2),
            5px 5px 8px rgba(0,0,0,0.3)
          `
        }}
      >
        <span className="bg-gradient-to-r from-secondary to-secondary/90 bg-clip-text text-transparent">
          CASA
        </span>
      </div>
    </div>
  );
};
