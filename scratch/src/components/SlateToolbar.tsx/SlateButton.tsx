import React from "react";
import type { Editor } from "slate";
import { useSlate } from "slate-react";

type Props = {
  onToggle: (editor: Editor, format: string) => void;
  checkActive: (editor: Editor, format: string) => boolean;
  format: string;
  children: React.ReactNode;
  disabled?: boolean;
  tooltip?: string;
};

const SlateButton = ({
  onToggle,
  checkActive,
  format,
  children,
  tooltip = "",
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
      className={`
      p-2 rounded-lg border text-sm font-medium transition-all duration-200
      ${
        isActive
          ? "bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-800 text-blue-700"
          : " bg-gray-50  dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
      }
      ${isActive ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
    `}
    >
      {children}
    </button>
  );
};

export default SlateButton;
