import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { createEditor } from "slate";
import type { Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import {
  CustomElement,
  CustomLeaf,
  CustomPlaceHolder,
} from "../../utils/editor/render";
import SlateToolbar from "./SlateToolbar.tsx/SlateToolbar";
import { editorShortcuts } from "../../utils/editor/shortcuts";

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
  console.log("TextEditor component rendered");
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [isPreview, setIsPreview] = React.useState(false);
  const onKeyDown = useCallback(editorShortcuts(editor), [editor]);

  const content = useRef<Descendant[]>(initialValue);
  const setContent = useCallback((value: Descendant[]) => {
    console.log("setContent called with value: ", value);
    content.current = value;
  }, []);

  useEffect(() => {
    setContent(initialValue);
  }, []);

  return (
    <>
      <Slate
        editor={editor}
        initialValue={content.current}
        onChange={setContent}
      >
        <div>
          <SlateToolbar isPreview={isPreview} setIsPreview={setIsPreview} />
          <Editable
            onKeyDown={onKeyDown}
            readOnly={isPreview}
            placeholder="Type something..."
            renderPlaceholder={CustomPlaceHolder}
            renderElement={CustomElement}
            renderLeaf={CustomLeaf}
            className="toolbar-input min-h-[250px] p-4 border rounded relative animate-colors"
          />
        </div>
      </Slate>
    </>
  );
};

export default TextEditor;
