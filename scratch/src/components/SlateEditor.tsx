import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";

type Props = {};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Start typing here..." }],
  },
];

const SlateEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={(value) => console.log(value)}
    >
      <Editable className="border p-4 min-h-[200px] rounded shadow" />
    </Slate>
  );
};

export default SlateEditor;
