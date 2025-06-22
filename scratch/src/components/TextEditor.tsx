import React, { useMemo } from "react";
import { createEditor } from "slate";
import type { BaseText } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import Toolbar from "./Toolbar/Toolbar";

type Props = {};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Start typing here..." }],
  },
];

type CustomText = BaseText & {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={(value) => console.log(value)}
    >
      <Toolbar />
      <Editable
        renderLeaf={({ attributes, children, leaf }) => {
          const customLeaf = leaf as CustomText;
          if (customLeaf.bold) children = <strong>{children}</strong>;
          if (customLeaf.italic) children = <em>{children}</em>;
          if (customLeaf.underline) children = <u>{children}</u>;
          return <span {...attributes}>{children}</span>;
        }}
        className="border p-4 min-h-[200px] rounded"
      />
    </Slate>
  );
};

export default TextEditor;
