"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import { DeployButton } from "@/components/DeployButton";
import { AppBar } from "@/components/AppBar";

const CodeTemplatePage: React.FC = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(`/api/gamble`);
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
  }, []);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Code Template</h1>
        {isEditing ? (
          <textarea
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
            className="bg-gray-900 text-white rounded-md p-4 w-full h-64 font-mono text-sm resize-none"
            spellCheck="false"
          />
        ) : (
          <pre className="bg-gray-900 text-white rounded-md p-4 h-64overflow-auto">
            <code className="language-javascript">{codeSnippet}</code>
          </pre>
        )}
        <button
          onClick={toggleEditing}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          {isEditing ? "Stop Editing" : "Edit Code"}
        </button>
        <button
          onClick={handleCopy}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ml-4"
        >
          {isCopied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <DeployButton />
    </div>
  );
};

export default CodeTemplatePage;
