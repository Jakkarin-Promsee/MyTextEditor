export const FONT_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const TEXT_ALIGNMENTS = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
} as const;

export const ELEMENT_TYPES = {
  PARAGRAPH: "paragraph",
} as const;

export type FontSize = (typeof FONT_SIZES)[keyof typeof FONT_SIZES];
export type TextAlignment =
  (typeof TEXT_ALIGNMENTS)[keyof typeof TEXT_ALIGNMENTS];
export type ElementType = (typeof ELEMENT_TYPES)[keyof typeof ELEMENT_TYPES];
