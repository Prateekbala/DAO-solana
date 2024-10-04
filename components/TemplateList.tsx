// dashboard/components/TemplateList.tsx
import React from "react";
import { Template } from "../types/Template";
import TemplateCard from "../app/(client)/dashboard/TemplateCard";

interface TemplateListProps {
  templates: Template[];
}

const TemplateList: React.FC<TemplateListProps> = ({ templates }) => (
  <div className="flex flex-col gap-8 w-full max-w-[50%] ml-[15%]">
    {templates.map((template) => (
      <TemplateCard key={template.name} template={template} />
    ))}
  </div>
);

export default TemplateList;
