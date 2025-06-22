import React from "react";
import ToolbarButton from "./ToolbarButton";
import SlateButton from "./SlateButton";

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

const Toolbar = () => (
  <>
    {/* For Text Format */}
    <div className="flex items-center justify-start gap-2">
      <SlateButton format="bold" tooltip="Bold">
        <b>B</b>
      </SlateButton>
      <SlateButton format="italic" tooltip="Italic">
        <i>I</i>
      </SlateButton>
      <SlateButton format="underline" tooltip="Underline">
        <u>U</u>
      </SlateButton>
    </div>
  </>
);

const oldToolbar = ({
  fontSize,
  textFormats,
  textAlign,
  onSizeChange,
  onTextFormatChange,
  onTextAlignChange,
}: Props) => (
  <>
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
  </>
);

export default Toolbar;
