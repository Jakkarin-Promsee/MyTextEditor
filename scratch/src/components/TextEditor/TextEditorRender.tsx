import {
  type RenderElementProps,
  type RenderLeafProps,
  type RenderPlaceholderProps,
} from "slate-react";
import { type CustomText } from "../../types/textEditor.ts";

export const CustomLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const customLeaf = leaf as CustomText;
  if (customLeaf.bold) children = <strong>{children}</strong>;
  if (customLeaf.italic) children = <em>{children}</em>;
  if (customLeaf.underline) children = <u>{children}</u>;
  return <span {...attributes}>{children}</span>;
};

export const CustomElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const textAlign = element.align || "left";
  const fontSize = element.fontSize || "small";
  if (fontSize === "large") children = <strong>{children}</strong>;

  return (
    <div
      {...attributes}
      className={`${mapTextAlignToTailwindClass(
        textAlign
      )} ${mapFontSizeToTailwindClass(fontSize)}`}
    >
      {children}
    </div>
  );
};

export const CustomPlaceHolder = ({
  attributes,
  children,
}: RenderPlaceholderProps) => {
  return (
    <div
      {...attributes}
      style={{
        ...(attributes.style || {}),
        top: "16px",
      }}
      className="min-h-[200px]"
    >
      {children}
    </div>
  );
};

export const mapTextAlignToTailwindClass = (textAlign: string | undefined) => {
  switch (textAlign) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "text-left";
  }
};

export const mapFontSizeToTailwindClass = (fontSize: string | undefined) => {
  switch (fontSize) {
    case "small":
      return "text-base";
    case "medium":
      return "text-xl";
    case "large":
      return "text-2xl";
    default:
      return "text-base";
  }
};
