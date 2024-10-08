"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";

const CodeTemplatePage: React.FC = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [originalCode, setOriginalCode] = useState(""); // Store original code
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
        setOriginalCode(data.code); // Set original code after fetch
        Prism.highlightAll();
      } catch (error) {
        console.error("Error fetching code snippet:", error);
      }
    };

    fetchCode();
  }, []);

  useEffect(() => {
    if (!isEditing) {
      Prism.highlightAll(); // Re-highlight when editing stops
    }
  }, [isEditing]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const toggleEditing = () => {
    if (!isEditing) {
      // Start editing, make a backup of the code
      setOriginalCode(codeSnippet); // Store current code before edit
    }
    setIsEditing(!isEditing);
  };

  const cancelEdit = () => {
    setCodeSnippet(originalCode); // Revert to original code
    setIsEditing(false); // Stop editing
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4">Code Template</h1>

        {isEditing ? (
          <textarea
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
            className="bg-gray-900 text-white rounded-md p-4 w-full h-64 font-mono text-sm resize-none"
            spellCheck="false"
          />
        ) : (
          <pre className="bg-gray-900 text-white rounded-md p-4 h-85 overflow-auto">
            <code className="language-javascript">{codeSnippet}</code>
          </pre>
        )}

        <div className="mt-4">
          <button
            onClick={toggleEditing}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            {isEditing ? "Save" : "Edit Code"}
          </button>

          {isEditing && (
            <button
              onClick={cancelEdit}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Cancel
            </button>
          )}

          <button
            onClick={handleCopy}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {isCopied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeTemplatePage;
