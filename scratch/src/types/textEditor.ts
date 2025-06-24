import type { BaseEditor, BaseText } from "slate";
import type { ReactEditor } from "slate-react";
import {
  type FontSize,
  type TextAlignment,
  type ElementType,
  ELEMENT_TYPES,
} from "../constants/textEditor";

export interface CustomText extends BaseText {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface ParagraphElement {
  type: ElementType;
  align?: TextAlignment;
  fontSize?: FontSize;
  children: CustomText[];
}

export type CustomElement = ParagraphElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: ParagraphElement;
    Text: CustomText;
  }
}

// Type guards
export const isCustomElement = (node: any): node is CustomElement => {
  return node && typeof node === "object" && "type" in node;
};

export const isParagraphElement = (node: any): node is ParagraphElement => {
  return isCustomElement(node) && node.type === ELEMENT_TYPES.PARAGRAPH;
};
