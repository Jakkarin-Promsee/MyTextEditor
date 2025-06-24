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
      <div className="flex items-center justify-between px-2 py-2 border rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50  dark:bg-gray-900 text-gray-900 dark:text-gray-50 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          {/* For Text Format */}
          <div className="flex items-center gap-1 p-1  rounded-lg border border-gray-200 dark:border-gray-700 ">
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="bold"
              tooltip="Bold (Ctrl+B)"
            >
              <Bold className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="italic"
              tooltip="Italic (Ctrl+I)"
            >
              <Italic className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </SlateButton>
            <SlateButton
              onToggle={toggleMark}
              checkActive={isMarkActive}
              format="underline"
              tooltip="Underline (Ctrl+U)"
            >
              <Underline className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </SlateButton>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="small"
              tooltip="Small Font Size (Ctrl+Shift+S)"
            >
              <Type className="w-2 h-2 text-gray-700 dark:text-gray-200" />
            </SlateButton>
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="medium"
              tooltip="Medium Font Size (Ctrl+Shift+M)"
            >
              <Type className="w-3 h-3 text-gray-700 dark:text-gray-200" />
            </SlateButton>
            <SlateButton
              onToggle={toggleFontSize}
              checkActive={isFontSizeActive}
              format="large"
              tooltip="Large Font Size (Ctrl+Shift+L)"
            >
              <Type className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </SlateButton>
          </div>

          {/* For Text Align */}
          <div className="flex items-center gap-1 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="left"
              tooltip="Align Left (Ctrl+Shift+L)"
            >
              <AlignLeft className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="center"
              tooltip="Align Center (Ctrl+Shift+C)"
            >
              <AlignCenter className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </SlateButton>

            <SlateButton
              onToggle={toggleAlign}
              checkActive={isAlign}
              format="right"
              tooltip="Align Right (Ctrl+Shift+R)"
            >
              <AlignRight className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </SlateButton>
          </div>
        </div>

        <PreviewButton
          checked={isPreview}
          onToggle={() => setIsPreview(!isPreview)}
          iconOn={<Pencil className="w-3 h-3 " />}
          iconOff={<Eye className="w-3 h-3" />}
        ></PreviewButton>
      </div>
    </>
  );
};

export default SlateToolbar;
