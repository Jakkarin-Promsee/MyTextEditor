import React from "react";
import { useSlate } from "slate-react";
import { isMarkActive, toggleMark } from "../../utils/editorUtils";

type Props = {
  format: string;
  children: React.ReactNode;
  tooltip?: string;
};

const SlateButton = ({ format, children, tooltip }: Props) => {
  const editor = useSlate();
  const isActive = isMarkActive(editor, format);

  return (
    <button
      onMouseDown={() => {
        toggleMark(editor, format);
      }}
      title={tooltip}
      className={isActive ? "text-gray-100 " : "text-gray-700"}
    >
      {children}
    </button>
  );
};

export default SlateButton;
