import React from "react";

type Props = {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  tooltip?: string;
};

const ToolbarButton: React.FC<Props> = ({
  onClick,
  isActive = false,
  disabled = false,
  children,
  tooltip,
}) => (
  <>
    <button
      onClick={onClick}
      disabled={disabled}
      title={tooltip}
      className={`${isActive ? "text-gray600" : "text-gray-100"}
      ${disabled ? "opacity-50" : "opacity-100"}`}
    >
      {children}
    </button>
  </>
);

export default ToolbarButton;
