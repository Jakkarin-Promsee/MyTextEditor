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
      className="bg-switch-track flex items-center w-13 h-6 rounded-xl animate-colors"
    >
      <div
        className={`bg-switch-thumb border-switch-track flex items-center justify-center w-8 h-6 rounded-xl border-2 shadow-md animate-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {checked ? iconOn : iconOff}
      </div>
    </button>
  );
};

export default PreviewButton;
