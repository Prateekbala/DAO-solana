"use client";
import React from "react";
import { Template } from "../../../types/Template";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const router = useRouter();

  const handleViewContractClick = () => {
    router.push("/code");
  };

  return (
    <motion.div
      className="flex flex-col gap-2 bg-[#0C0C0C] text-white p-6 dark:bg-[#0C0C0C] transition-all mt-[10%]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* <span className="text-gray-400 text-lg mb-4"></span> */}

      <h5 className="text-5xl font-bold text-white mb-[7%]">{template.name}</h5>

      <p className="text-[#93938E] text-lg mb-6">{template.description}</p>

      <p className="text-[#93938E] text-lg mb-8"></p>

      <button
        className="w-fit bg-transparent border border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-neon  hover:text-[#fbbf24] hover:border-[#fbbf24]  transition-all"
        onClick={handleViewContractClick}
      >
        View Contract
      </button>
    </motion.div>
  );
};

export default TemplateCard;
