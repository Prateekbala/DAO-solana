"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";

const CodeTemplatePage: React.FC = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [isCopied, setIsCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Code Template</h1>

        {/* Code block with syntax highlighting */}
        <pre className="bg-gray-900 text-white rounded-md p-4">
          {/* Using Prism to highlight code dynamically */}
          <code className="language-javascript">{codeSnippet}</code>
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isCopied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};

export default CodeTemplatePage;
