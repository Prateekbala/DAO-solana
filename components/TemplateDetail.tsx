// dashboard/components/TemplateDetail.tsx
import React from "react";
import { Template } from "../types/Template";

interface TemplateDetailProps {
  template: Template;
  onClose: () => void;
}

const TemplateDetail: React.FC<TemplateDetailProps> = ({
  template,
  onClose,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg max-w-lg w-full">
      <h2 className="text-2xl font-bold">{template.name}</h2>
      <p className="mt-4">{template.description}</p>
      <h3 className="mt-4 font-bold">Pre-Configured Settings:</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Governance model: Token-based voting</li>
        <li>Default member roles and permissions</li>
        <li>Treasury setup</li>
        <li>Token structure</li>
      </ul>
      <h3 className="mt-4 font-bold">Customizable Features:</h3>
      <p>What can be adjusted or personalized.</p>
      <div className="mt-6 flex justify-between">
        <button className="bg-neon text-black px-4 py-2 rounded-lg font-bold hover:bg-neon-dark">
          Launch
        </button>
        <button onClick={onClose} className="text-gray-500 hover:underline">
          Close
        </button>
      </div>
    </div>
  </div>
);

export default TemplateDetail;
