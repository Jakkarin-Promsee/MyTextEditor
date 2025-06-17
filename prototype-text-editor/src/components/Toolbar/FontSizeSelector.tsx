import React from "react";
import type { FontSizeOption } from "./types";

interface Props {
  currentSize: string;
  onSizeChange: (size: string) => void;
}

const FontSizeSelector: React.FC<Props> = ({ currentSize, onSizeChange }) => {
  const fontSizes: FontSizeOption[] = [
    { label: "Normal", value: "normal", class: "text-base" },
    { label: "Medium", value: "medium", class: "text-lg" },
    { label: "Large", value: "large", class: "text-xl" },
  ];

  return (
    <select
      value={currentSize}
      onChange={(e) => onSizeChange(e.target.value)}
      className="
        px-3 py-2 pr-8 bg-white border border-gray-200 rounded-lg
        text-sm font-medium text-gray-700 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        hover:border-gray-300 transition-colors duration-200
      "
    >
      {fontSizes.map((fs) => (
        <option key={fs.value} value={fs.value}>
          {fs.label}
        </option>
      ))}
    </select>
  );
};

export default FontSizeSelector;
