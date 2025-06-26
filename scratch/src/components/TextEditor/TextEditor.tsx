import React, { useEffect, useMemo } from "react";
import { createEditor } from "slate";
import type { Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import {
  CustomElement,
  CustomLeaf,
  CustomPlaceHolder,
} from "./TextEditorRender";
import SlateToolbar from "./SlateToolbar.tsx/SlateToolbar";

export const initialValue: Descendant[] = [
  {
    type: "paragraph",
    align: "left",
    fontSize: "small",
    children: [
      {
        text: "",
      },
    ],
  },
];

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
        <div>
          <SlateToolbar isPreview={isPreview} setIsPreview={setIsPreview} />
          <Editable
            readOnly={isPreview}
            placeholder="Type something..."
            renderPlaceholder={CustomPlaceHolder}
            renderElement={CustomElement}
            renderLeaf={CustomLeaf}
            className="min-h-[200px] p-4 border rounded relative"
          />
        </div>
      </Slate>
    </>
  );
};

export default TextEditor;
