import SlateButton from "./SlateButton";
import {
  isMarkActive,
  toggleMark,
  isFontSizeActive,
  toggleFontSize,
  isAlign,
  toggleAlign,
} from "../../../utils/editorUtils";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Eye,
  Italic,
  Pencil,
  Type,
  Underline,
} from "lucide-react";
import PreviewButton from "./PreviewToggle";

type Props = {
  isPreview: boolean;
  setIsPreview: (value: boolean) => void;
};

const SlateToolbar = ({ isPreview, setIsPreview }: Props) => {
  return (
    <>
      <div className="toolbar-container flex items-center justify-between px-2 py-2 mb-2">
        <div className="flex flex-wrap gap-3 items-center ">
          {/* For Text Format */}
          <div className="toolbar-group flex gap-1 items-center p-1">
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="bold"
              tooltip="Bold (Ctrl+B)"
            >
              <Bold className="toolbar-element w-4 h-4" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="italic"
              tooltip="Italic (Ctrl+I)"
            >
              <Italic className="toolbar-element w-4 h-4" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="underline"
              tooltip="Underline (Ctrl+U)"
            >
              <Underline className="toolbar-element w-4 h-4" />
            </SlateButton>
          </div>

          {/* For Font Size */}
          <div className="toolbar-group flex gap-1 items-center p-1">
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="small"
              tooltip="Small Font Size (Ctrl+Shift+S)"
            >
              <Type className="toolbar-element w-2 h-2" />
            </SlateButton>
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="medium"
              tooltip="Medium Font Size (Ctrl+Shift+M)"
            >
              <Type className="toolbar-element w-3 h-3" />
            </SlateButton>
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="large"
              tooltip="Large Font Size (Ctrl+Shift+L)"
            >
              <Type className="toolbar-element w-4 h-4" />
            </SlateButton>
          </div>

          {/* For Text Align */}
          <div className="toolbar-group flex gap-1 items-center p-1">
            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="left"
              tooltip="Align Left (Ctrl+Shift+L)"
            >
              <AlignLeft className="toolbar-element w-4 h-4" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="center"
              tooltip="Align Center (Ctrl+Shift+C)"
            >
              <AlignCenter className="toolbar-element w-4 h-4" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="right"
              tooltip="Align Right (Ctrl+Shift+R)"
            >
              <AlignRight className="toolbar-element w-4 h-4" />
            </SlateButton>
          </div>
        </div>

        <PreviewButton
          checked={isPreview}
          onToggle={() => setIsPreview(!isPreview)}
          iconOn={<Pencil className="w-3 h-3" />}
          iconOff={<Eye className="w-3 h-3" />}
        ></PreviewButton>
      </div>
    </>
  );
};

export default SlateToolbar;
