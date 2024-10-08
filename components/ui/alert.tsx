import React from "react";

interface AlertProps {
  variant?: "destructive";
}

export const Alert: React.FC<AlertProps> = ({ variant, children }) => (
  <div
    className={`p-4 rounded ${
      variant === "destructive" ? "bg-red-500 text-white" : "bg-gray-200"
    }`}
  >
    {children}
  </div>
);

export const AlertDescription: React.FC = ({ children }) => (
  <div>{children}</div>
);
