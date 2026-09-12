"use client";

import { useEffect, useState } from "react";

export default function SpotlightGrid() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-2] h-full w-full bg-[#050505]">
      {/* Dimmed static grid */}
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect x="2" y="2" width="56" height="56" rx="12" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
      
      {/* Neon glowing grid that follows the mouse */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      >
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPatternHighlight" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="56" height="56" rx="12" fill="none" stroke="#00ff66" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPatternHighlight)" />
        </svg>
      </div>
    </div>
  );
}
