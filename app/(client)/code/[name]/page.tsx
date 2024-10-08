"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import { DeployButton } from "@/components/DeployButton";
import { useParams } from "next/navigation";

const CodeTemplatePage: React.FC = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
  const name = params.name as string;

  useEffect(() => {
    if (!name) return;
    const fetchCode = async () => {
      try {
        const response = await fetch(`/api/${name}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCodeSnippet(data.code);
        Prism.highlightAll();
      } catch (error) {
        console.error("Error fetching code snippet:", error);
      }
    };
    fetchCode();
  }, [name]);

  useEffect(() => {
    if (!isEditing) {
      Prism.highlightAll();
    }
  }, [isEditing]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 max-w-6xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
          {name.charAt(0).toUpperCase() + name.slice(1)} Code Template
        </h1>
        <div className="bg-gray-900 rounded-lg p-4 h-[calc(90vh-200px)] overflow-auto custom-scrollbar">
          {isEditing ? (
            <textarea
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
              className="bg-gray-900 text-white w-full h-full font-mono text-sm resize-none outline-none custom-scrollbar"
              spellCheck="false"
            />
          ) : (
            <pre className="h-full">
              <code className="language-javascript text-sm">{codeSnippet}</code>
            </pre>
          )}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={toggleEditing}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            {isEditing ? "Stop Editing" : "Edit Code"}
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isCopied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>
      <div className="mt-6">
        <DeployButton />
      </div>
    </div>
  );
};

export default CodeTemplatePage;
