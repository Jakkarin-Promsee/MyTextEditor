import React from "react";
import ToolbarButton from "./ToolbarButton";

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

const Toolbar: React.FC<Props> = ({
  fontSize,
  textFormats,
  textAlign,
  onSizeChange,
  onTextFormatChange,
  onTextAlignChange,
}) => (
  <>
    {/* For Text Format */}
    <div className="flex items-center justify-start gap-2">
      <ToolbarButton
        onClick={() => onTextFormatChange("bold")}
        isActive={textFormats.bold}
        tooltip="Bold (Ctrl+B)"
      >
        <p>bold</p>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => onTextFormatChange("bold")}
        isActive={textFormats.italic}
        tooltip="Italic (Ctrl+I)"
      >
        <p>Italic</p>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => onTextFormatChange("bold")}
        isActive={textFormats.underline}
        tooltip="Underline (Ctrl+U)"
      >
        <p>Underline</p>
      </ToolbarButton>
    </div>

    {/* For Font Size */}
    <div className="flex items-center justify-start gap-2">
      <ToolbarButton
        onClick={() => onSizeChange("normal")}
        tooltip="Text Size Normal"
      >
        <p>Normal {fontSize}</p>
      </ToolbarButton>
    </div>

    {/* For Text Align */}
    <div className="flex items-center justify-start gap-2">
      <ToolbarButton
        onClick={() => onTextAlignChange("left")}
        isActive={textAlign === "left"}
        tooltip="Align Left"
      >
        <p>Left</p>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => onTextAlignChange("center")}
        isActive={textAlign === "center"}
        tooltip="Align center"
      >
        <p>Center</p>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => onTextAlignChange("right")}
        isActive={textAlign === "right"}
        tooltip="Align right"
      >
        <p>Right</p>
      </ToolbarButton>
    </div>
  </>
);

export default Toolbar;
