import React from "react";
import type { ToolbarButtonProps } from "./types";

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  isActive = false,
  disabled = false,
  children,
  tooltip,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={tooltip}
    className={`
      p-2 rounded-lg border text-sm font-medium transition-all duration-200
      ${
        isActive
          ? "bg-blue-100 border-blue-300 text-blue-700"
          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
      }
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
    `}
  >
    {children}
  </button>
);

export default ToolbarButton;
