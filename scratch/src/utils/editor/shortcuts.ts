import { toggleMark, toggleFontSize, toggleAlign } from "./formatting";

export const editorShortcuts =
  (editor: any) => (event: React.KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      // Text formatting
      switch (event.key.toLowerCase()) {
        case "z":
          event.preventDefault();
          editor.undo();
          break;

        case "y":
          event.preventDefault();
          editor.redo();
          break;

        case "b":
          event.preventDefault();
          toggleMark(editor, "bold");
          break;
        case "i":
          event.preventDefault();
          toggleMark(editor, "italic");
          break;
        case "u":
          event.preventDefault();
          toggleMark(editor, "underline");
          break;
        default:
          break;
      }

      if (event.altKey) {
        // Font size
        switch (event.key) {
          case "1":
            event.preventDefault();
            toggleFontSize(editor, "small");
            break;
          case "2":
            event.preventDefault();
            toggleFontSize(editor, "medium");
            break;
          case "3":
            event.preventDefault();
            toggleFontSize(editor, "large");
            break;

          // Alignment
          case "l":
            event.preventDefault();
            toggleAlign(editor, "left");
            break;
          case "e":
            event.preventDefault();
            toggleAlign(editor, "center");
            break;
          case "r":
            event.preventDefault();
            toggleAlign(editor, "right");
            break;
        }
      }
    }
  };
