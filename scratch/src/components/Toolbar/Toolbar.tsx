import React from "react";
import ToolbarButton from "./ToolbarButton";
import SlateButton from "./SlateButton";
import { useSlate } from "slate-react";
import {
  isMarkActive,
  toggleMark,
  isAlign,
  toggleAlign,
  isBlockActive,
  toggleBlock,
} from "../../utils/editorUtils";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Type,
  Underline,
} from "lucide-react";

type Props = {
  fontSize: string;
  textFormats: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
  };
  textAlign: string;

  onSizeChange: (size: string) => void;
  onTextFormatChange: (format: string) => void;
  onTextAlignChange: (align: string) => void;
};

const Toolbar = () => {
  return (
    <>
      <div className="px-0 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-wrap items-center gap-3">
          {/* For Text Format */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-gray-200">
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="bold"
              tooltip="Bold (Ctrl+B)"
            >
              <Bold size={18} className="w-4 h-4" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="italic"
              tooltip="Italic (Ctrl+I)"
            >
              <Italic size={18} className="w-4 h-4" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="underline"
              tooltip="Underline (Ctrl+U)"
            >
              <Underline size={18} className="w-4 h-4" />
            </SlateButton>
          </div>

          <div className="flex items-center gap-2 p-1 bg-white rounded-lg border border-gray-200">
            <Type className="w-4 h-4 m-2" />
          </div>

          {/* For Text Align */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-gray-200">
            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="left"
              tooltip="Align Left (Ctrl+Shift+L)"
            >
              <AlignLeft size={18} className="w-4 h-4" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="center"
              tooltip="Align Center (Ctrl+Shift+C)"
            >
              <AlignCenter size={18} className="w-4 h-4" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="right"
              tooltip="Align Right (Ctrl+Shift+R)"
            >
              <AlignRight size={18} className="w-4 h-4" />
            </SlateButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
