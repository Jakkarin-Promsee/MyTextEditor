import { Editor, Transforms, Element as SlateElement } from "slate";

export const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor) as Record<string, unknown> | null;
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const isFontSizeActive = (editor: Editor, fontSize: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      SlateElement.isElement(n) &&
      Editor.isBlock(editor, n) &&
      typeof n.align === "string",
  });

  return match ? (match[0] as any).fontSize === fontSize : false;
};

export const toggleFontSize = (editor: Editor, fontSize: string) => {
  Transforms.setNodes(
    editor,
    { fontSize },
    {
      match: (n) => {
        // Type guard to ensure n is a CustomElement
        return SlateElement.isElement(n) && Editor.isBlock(editor, n);
      },
    }
  );
};

export const isAlign = (editor: Editor, align: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      SlateElement.isElement(n) &&
      Editor.isBlock(editor, n) &&
      typeof n.align === "string",
  });
  return match ? (match[0] as any).align === align : false;
};

export const toggleAlign = (editor: Editor, align: string) => {
  Transforms.setNodes(
    editor,
    { align },
    {
      match: (n) => {
        // Type guard to ensure n is a CustomElement
        return SlateElement.isElement(n) && Editor.isBlock(editor, n);
      },
    }
  );
};

export const isBlockActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });
  return !!match;
};

export const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format);
  const newType = isActive ? "paragraph" : format;

  Transforms.setNodes(
    editor,
    { type: newType },
    {
      match: (n) => {
        // Type guard to ensure n is a CustomElement
        return SlateElement.isElement(n) && Editor.isBlock(editor, n);
      },
    }
  );
};
