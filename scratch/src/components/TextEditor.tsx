import React, { useEffect, useMemo } from "react";
import { createEditor } from "slate";
import type { BaseEditor, BaseText, Descendant } from "slate";
import {
  Editable,
  ReactEditor,
  Slate,
  withReact,
  type RenderElementProps,
  type RenderLeafProps,
  type RenderPlaceholderProps,
} from "slate-react";
import Toolbar from "./Toolbar/Toolbar";

type Props = {};

type CustomText = BaseText & {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

type ParagraphElement = {
  type: "paragraph";
  align?: "left" | "center" | "right";
  children: CustomText[];
};

type CustomElement = ParagraphElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "",
      },
    ],
  },
];

const SlateLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const customLeaf = leaf as CustomText;
  if (customLeaf.bold) children = <strong>{children}</strong>;
  if (customLeaf.italic) children = <em>{children}</em>;
  if (customLeaf.underline) children = <u>{children}</u>;
  return <span {...attributes}>{children}</span>;
};

const SlateElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const textAlign =
    (element.align as React.CSSProperties["textAlign"]) || "left";
  return (
    <div {...attributes} className={getAlignClass(textAlign)}>
      {children}
    </div>
  );
};

const SlatePlaceholder = ({ attributes, children }: RenderPlaceholderProps) => {
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

const getAlignClass = (align: string | undefined) => {
  switch (align) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "text-left";
  }
};

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [content, setContent] = React.useState<Descendant[]>(initialValue);
  const [isPreview, setIsPreview] = React.useState(false);

  useEffect(() => {
    console.log("content changed: ", content);
  }, [content]);

  return (
    <>
      <Slate editor={editor} initialValue={content} onChange={setContent}>
        <button onClick={() => setIsPreview(!isPreview)}>
          {isPreview ? "Edit" : "Preview"}
        </button>
        <Toolbar />
        <Editable
          readOnly={isPreview}
          placeholder="Type something..."
          renderPlaceholder={SlatePlaceholder}
          renderElement={SlateElement}
          renderLeaf={SlateLeaf}
          className="border p-4 min-h-[200px] rounded relative"
        />
      </Slate>
    </>
  );
};

export default TextEditor;
