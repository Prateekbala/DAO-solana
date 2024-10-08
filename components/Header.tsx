// dashboard/components/Header.tsx
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TypewriterEffect2Smooth } from "@/components/ui/typewriter-effect2";

const words1 = [
  {
    className: "text-neon dark:text-neon",
    text: "Choose",
  },
  {
    className: "text-neon dark:text-neon",
    text: "a",
  },
  {
    className: "text-neon dark:text-neon",
    text: "Contract",
  },
];

const words2 = [
  { text: "Choose", className: "text-neon dark:text-neon" },
  { text: "a", className: "text-neon dark:text-neon" },
  { text: "template", className: "text-neon dark:text-neon" },
  { text: "for", className: "text-neon dark:text-neon" },
  { text: "managing", className: "text-neon dark:text-neon" },
  { text: "your", className: "text-neon dark:text-neon" },
  { text: "community,", className: "text-neon dark:text-neon" },
  { text: "business,", className: "text-neon dark:text-neon" },
  { text: "or", className: "text-neon dark:text-neon" },
  { text: "investment", className: "text-neon dark:text-neon" },
  { text: "fund.", className: "text-neon dark:text-neon" },
];

const Header: React.FC = () => (
  <header className="bg-[#0C0C0C] text-white p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center">
    <TypewriterEffectSmooth words={words1} />
    <TypewriterEffect2Smooth words={words2} />
  </header>
);

export default Header;
