import SlateButton from "./SlateButton";
import {
  isMarkActive,
  toggleMark,
  isFontSizeActive,
  toggleFontSize,
  isAlign,
  toggleAlign,
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
              <Bold className="w-4 h-4" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="italic"
              tooltip="Italic (Ctrl+I)"
            >
              <Italic className="w-4 h-4" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="underline"
              tooltip="Underline (Ctrl+U)"
            >
              <Underline className="w-4 h-4" />
            </SlateButton>
          </div>

          <div className="flex items-center gap-2 p-1 bg-white rounded-lg border border-gray-200">
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="small"
              tooltip="Small Font Size (Ctrl+Shift+S)"
            >
              <Type className="w-2 h-2" />
            </SlateButton>
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="medium"
              tooltip="Medium Font Size (Ctrl+Shift+M)"
            >
              <Type className="w-3 h-3" />
            </SlateButton>
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="large"
              tooltip="Large Font Size (Ctrl+Shift+L)"
            >
              <Type className="w-4 h-4" />
            </SlateButton>
          </div>

          {/* For Text Align */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-gray-200">
            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="left"
              tooltip="Align Left (Ctrl+Shift+L)"
            >
              <AlignLeft className="w-4 h-4" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="center"
              tooltip="Align Center (Ctrl+Shift+C)"
            >
              <AlignCenter className="w-4 h-4" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="right"
              tooltip="Align Right (Ctrl+Shift+R)"
            >
              <AlignRight className="w-4 h-4" />
            </SlateButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
