import React from "react";

interface ToggleButtonProps {
  checked: boolean;
  onToggle: () => void;
  iconOn?: React.ReactNode;
  iconOff?: React.ReactNode;
}

const PreviewButton: React.FC<ToggleButtonProps> = ({
  checked,
  onToggle,
  iconOn,
  iconOff,
}) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center w-13 h-6 bg-gray-300 dark:bg-gray-600 rounded-xl transition-colors duration-300"
    >
      <div
        className={`flex items-center justify-center w-8 h-6 bg-white border dark:bg-gray-950 border-gray-200 dark:border-gray-700 rounded-xl shadow-md  transition-transform transform duration-300 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {checked ? iconOn : iconOff}
      </div>
    </button>
  );
};

export default PreviewButton;
