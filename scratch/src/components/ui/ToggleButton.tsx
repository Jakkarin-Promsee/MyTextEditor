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
      className="ui-switch-track flex items-center w-12 h-6 px-1 rounded-full animate-colors "
    >
      <div
        className={`ui-switch-thumb flex items-center justify-center w-5 h-5 rounded-full shadow-md  animate-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {checked ? iconOn : iconOff}
      </div>
    </button>
  );
};

export default ToggleButton;
