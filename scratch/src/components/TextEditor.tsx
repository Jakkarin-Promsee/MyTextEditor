import React, { useCallback, useEffect, useState } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SlateEditor from "./SlateEditor";

type Props = {};

const TextEditor: React.FC<Props> = ({}) => {
  const [fontSize, setFontSize] = useState("normal");
  const [textAlign, setTextAlign] = useState("left");
  const [textFormat, setTextFormat] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  useEffect(() => {
    console.log("Some changes detected");
  }, [fontSize, textAlign, textFormat]);

  const applyTextFormat = useCallback((format: string) => {
    if (format === "bold") {
      setTextFormat((prev) => ({ ...prev, bold: !prev.bold }));
    } else if (format === "italic") {
      setTextFormat((prev) => ({ ...prev, italic: !prev.italic }));
    } else if (format === "underline") {
      setTextFormat((prev) => ({ ...prev, underline: !prev.underline }));
    }
  }, []);

  return (
    <>
      <Toolbar
        fontSize={fontSize}
        textFormats={textFormat}
        textAlign={textAlign}
        onSizeChange={setFontSize}
        onTextFormatChange={applyTextFormat}
        onTextAlignChange={setTextAlign}
      ></Toolbar>
      <SlateEditor></SlateEditor>
    </>
  );
};

export default TextEditor;
