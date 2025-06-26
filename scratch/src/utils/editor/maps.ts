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
