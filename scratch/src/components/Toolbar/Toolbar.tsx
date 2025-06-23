import React from "react";
import ToolbarButton from "./ToolbarButton";
import SlateButton from "./SlateButton";
import { useSlate } from "slate-react";
import {
  isMarkActive,
  toggleMark,
  isBlockActive,
  toggleBlock,
  toggleAlign,
  isAlign,
} from "../../utils/editorUtils";

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
  const editor = useSlate();

  return (
    <>
      <div className="flex items-center justify-start gap-4">
        {/* For Text Format */}
        <div className="flex items-center justify-start gap-2">
          <SlateButton
            onToggle={toggleMark}
            checkActive={isMarkActive}
            format="bold"
            tooltip="Bold"
          >
            <b>B</b>
          </SlateButton>
          <SlateButton
            onToggle={toggleMark}
            checkActive={isMarkActive}
            format="italic"
            tooltip="Italic"
          >
            <i>I</i>
          </SlateButton>
          <SlateButton
            onToggle={toggleMark}
            checkActive={isMarkActive}
            format="underline"
            tooltip="Underline"
          >
            <u>U</u>
          </SlateButton>
        </div>

        {/*  */}
        <div>||</div>

        {/* For Text Align */}
        <div className="flex items-center justify-start gap-2">
          <SlateButton
            onToggle={toggleAlign}
            checkActive={isAlign}
            format="left"
            tooltip="Align Left"
          >
            <p>Left</p>
          </SlateButton>

          <SlateButton
            onToggle={toggleAlign}
            checkActive={isAlign}
            format="center"
            tooltip="Align Center"
          >
            <p>Center</p>
          </SlateButton>

          <SlateButton
            onToggle={toggleAlign}
            checkActive={isAlign}
            format="right"
            tooltip="Align Right"
          >
            <p>Right</p>
          </SlateButton>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
