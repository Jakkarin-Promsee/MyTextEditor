import React from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image as ImageIcon,
  Type,
} from "lucide-react";
import ToolbarButton from "./ToolbarButton";
import FontSizeSelector from "./FontSizeSelector";

interface Props {
  activeFormats: { bold: boolean; italic: boolean; underline: boolean };
  fontSize: string;
  textAlign: string;
  onFormat: (string) => void;
  onSizeChange: (size: string) => void;
  onTextAlign: (align: string) => void;
  onImageClick: () => void;
}

const Toolbar: React.FC<Props> = ({
  activeFormats,
  fontSize,
  textAlign,
  onFormat,
  onSizeChange,
  onTextAlign,
  onImageClick,
}) => (
  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
    <div className="flex flex-wrap items-center gap-3">
      {/* Formatting */}
      <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-gray-200">
        <ToolbarButton
          onClick={() => onFormat("bold")}
          isActive={activeFormats.bold}
          tooltip="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => onFormat("italic")}
          isActive={activeFormats.italic}
          tooltip="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => onFormat("underline")}
          isActive={activeFormats.underline}
          tooltip="Underline (Ctrl+U)"
        >
          <Underline className="w-4 h-4" />
        </ToolbarButton>
      </div>
      {/* Font Size */}
      <div className="flex items-center gap-2">
        <Type className="w-4 h-4 text-gray-500" />
        <FontSizeSelector currentSize={fontSize} onSizeChange={onSizeChange} />
      </div>
      {/* Alignment */}
      <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-gray-200">
        <ToolbarButton
          onClick={() => onTextAlign("left")}
          isActive={textAlign === "left"}
          tooltip="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => onTextAlign("center")}
          isActive={textAlign === "center"}
          tooltip="Align Center"
        >
          <AlignCenter className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => onTextAlign("right")}
          isActive={textAlign === "right"}
          tooltip="Align Right"
        >
          <AlignRight className="w-4 h-4" />
        </ToolbarButton>
      </div>
      {/* Insert Image */}
      <ToolbarButton onClick={onImageClick} tooltip="Insert Image">
        <ImageIcon className="w-4 h-4" />
        <span className="ml-2 text-sm">Image</span>
      </ToolbarButton>
    </div>
  </div>
);

export default Toolbar;
