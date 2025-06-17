import React, { useState, useRef, useCallback, useEffect } from "react";
import Toolbar from "./Toolbar/Toolbar";
import ImageUploader from "./ImageUploader/ImageUploader";
import ResizableImage from "./ResizableImage/ResizableImage";
import type { ImageData } from "./ImageUploader/types";

const TextEditor: React.FC = () => {
  const [content, setContent] = useState("");
  const [fontSize, setFontSize] = useState("normal");
  const [textAlign, setTextAlign] = useState("left");
  const [images, setImages] = useState<ImageData[]>([]);
  const [showUploader, setShowUploader] = useState(false);
  const [formats, setFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const editorRef = useRef<HTMLDivElement>(null);

  const applyFormat = useCallback((cmd: string) => {
    document.execCommand(cmd);
    updateFormats();
    editorRef.current?.focus();
  }, []);

  const updateFormats = useCallback(() => {
    setFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
    });
  }, []);

  const handleInput = useCallback(
    () => setContent(editorRef.current?.innerHTML ?? ""),
    []
  );
  const handleSelect = useCallback(updateFormats, [updateFormats]);

  const setSize = (s: string) => {
    setFontSize(s);
    editorRef.current?.focus();
  };

  const setAlign = (a: string) => {
    setTextAlign(a);
    document.execCommand(
      a === "center"
        ? "justifyCenter"
        : a === "right"
        ? "justifyRight"
        : "justifyLeft"
    );
    updateFormats();
  };

  const addImage = (img: ImageData) => setImages((prev) => [...prev, img]);
  const resizeImage = (id: string, w: number, h: number) =>
    setImages((prev) =>
      prev.map((i) => (i.id === id ? { ...i, width: w, height: h } : i))
    );
  const removeImage = (id: string) =>
    setImages((prev) => prev.filter((i) => i.id !== id));

  const getFontClass = () =>
    fontSize === "medium"
      ? "text-lg"
      : fontSize === "large"
      ? "text-xl"
      : "text-base";

  const getAlignClass = () =>
    textAlign === "center"
      ? "text-center"
      : textAlign === "right"
      ? "text-right"
      : "text-left";

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelect);
    return () => document.removeEventListener("selectionchange", handleSelect);
  }, [handleSelect]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <header className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <h1 className="text-2xl font-bold text-gray-900">Article Editor</h1>
          <p className="text-sm text-gray-600">
            Create and edit with rich formatting
          </p>
        </header>

        <Toolbar
          activeFormats={formats}
          fontSize={fontSize}
          textAlign={textAlign}
          onFormat={applyFormat}
          onSizeChange={setSize}
          onTextAlign={setAlign}
          onImageClick={() => setShowUploader(true)}
        />

        <div className="p-6">
          {images.map((img) => (
            <ResizableImage
              key={img.id}
              image={img}
              onResize={resizeImage}
              onRemove={removeImage}
            />
          ))}
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            className={`
              min-h-96 p-4 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500
              ${getFontClass()} ${getAlignClass()} leading-relaxed text-gray-800
              prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none
            `}
            style={{ fontFamily: '"Inter", sans-serif' }}
            suppressContentEditableWarning
          />
        </div>

        <footer className="px-6 py-4 border-t bg-gray-50 text-sm text-gray-500 flex justify-between">
          <span>
            Words:{" "}
            {
              content
                .replace(/<[^>]*>/g, "")
                .split(/\s+/)
                .filter(Boolean).length
            }
          </span>
          <span>Chars: {content.replace(/<[^>]*>/g, "").length}</span>
        </footer>
      </div>

      {showUploader && (
        <ImageUploader
          onImageUpload={addImage}
          onClose={() => setShowUploader(false)}
        />
      )}
    </div>
  );
};

export default TextEditor;
