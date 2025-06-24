import React from "react";

interface ToggleButtonProps {
  checked: boolean;
  onToggle: () => void;
  iconOn?: React.ReactNode;
  iconOff?: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  checked,
  onToggle,
  iconOn,
  iconOff,
}) => {
  return (
    <button
      onClick={onToggle}
      className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 transition-colors duration-300"
    >
      <div
        className={`w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {checked ? iconOn : iconOff}
      </div>
    </button>
  );
};

export default ToggleButton;
