import React from "react";
import type { Editor } from "slate";
import { useSlate } from "slate-react";

type Props = {
  onToggle: (editor: Editor, format: string) => void;
  checkActive: (editor: Editor, format: string) => boolean;
  format: string;
  children: React.ReactNode;
  tooltip?: string;
};

const SlateButton = ({
  onToggle,
  checkActive,
  format,
  children,
  tooltip,
}: Props) => {
  const editor = useSlate();
  const isActive = checkActive(editor, format);

  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault(); // Prevent default behavior to avoid losing focus
        onToggle(editor, format);
      }}
      title={tooltip}
      className={isActive ? "text-gray-100 " : "text-gray-700"}
    >
      {children}
    </button>
  );
};

export default SlateButton;
