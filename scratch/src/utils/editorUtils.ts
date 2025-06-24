import { Editor, Transforms, Element as SlateElement } from "slate";
import {
  FONT_SIZES,
  TEXT_ALIGNMENTS,
  ELEMENT_TYPES,
  type FontSize,
  type TextAlignment,
  type ElementType,
} from "../constants/textEditor";

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

export function convertFontsize(value: string): FontSize | undefined {
  const values = Object.values(FONT_SIZES);
  return values.includes(value as FontSize) ? (value as FontSize) : undefined;
}

export const toggleFontSize = (editor: Editor, fontSize: string) => {
  Transforms.setNodes(
    editor,
    { fontSize: convertFontsize(fontSize) },
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

export function convertTextAlign(value: string): TextAlignment | undefined {
  const values = Object.values(TEXT_ALIGNMENTS);
  return values.includes(value as TextAlignment)
    ? (value as TextAlignment)
    : undefined;
}

export const toggleAlign = (editor: Editor, align: string) => {
  Transforms.setNodes(
    editor,
    { align: convertTextAlign(align) },
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

export function convertElementType(value: string): ElementType | undefined {
  const values = Object.values(ELEMENT_TYPES);
  return values.includes(value as ElementType)
    ? (value as ElementType)
    : undefined;
}

export const toggleBlock = (editor: Editor, type: string) => {
  Transforms.setNodes(
    editor,
    { type: convertElementType(type) },
    {
      match: (n) => {
        // Type guard to ensure n is a CustomElement
        return SlateElement.isElement(n) && Editor.isBlock(editor, n);
      },
    }
  );
};
