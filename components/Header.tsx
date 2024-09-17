// dashboard/components/Header.tsx
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TypewriterEffect2Smooth } from "@/components/ui/typewriter-effect2";

const words1 = [
  {
    text: "Choose",
  },
  {
    text: "a",
  },
  {
    className: "text-neon dark:text-neon",
    text: "DAO",
  },
  {
    text: "Template",
  },
];

const words2 = [
  { text: "Choose" },
  { text: "a" },
  { text: "template" },
  { text: "for" },
  { text: "managing" },
  { text: "your" },
  { text: "community," },
  { text: "business," },
  { text: "or" },
  { text: "investment" },
  { text: "fund." },
];


const Header: React.FC = () => (
  <header className="bg-[#0C0C0C] text-white p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center">
    <TypewriterEffectSmooth words={words1} />
    <TypewriterEffect2Smooth words={words2} />
  </header>
);

export default Header;
