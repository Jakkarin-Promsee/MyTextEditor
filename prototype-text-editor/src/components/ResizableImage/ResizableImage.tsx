import React, { useState } from "react";
import type { ImageData } from "./types";
import { X } from "lucide-react";

interface Props {
  image: ImageData;
  onResize: (id: string, width: number, height: number) => void;
  onRemove: (id: string) => void;
}

const ResizableImage: React.FC<Props> = ({ image, onResize, onRemove }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    const startX = e.clientX;
    const startW = image.width;
    const aspect = image.height / image.width;

    const move = (ev: MouseEvent) => {
      const newW = Math.max(100, Math.min(800, startW + (ev.clientX - startX)));
      onResize(image.id, newW, Math.round(newW * aspect));
    };
    const up = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  return (
    <div
      className="relative inline-block group my-2"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="max-w-full h-auto rounded-lg shadow-sm border border-gray-200"
        style={{ width: image.width, height: image.height }}
      />
      {showControls && (
        <>
          <button
            onClick={() => onRemove(image.id)}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div
            className="absolute bottom-2 right-2 w-4 h-4 bg-blue-500 rounded cursor-se-resize hover:bg-blue-600"
            onMouseDown={handleMouseDown}
          />
        </>
      )}
      {isResizing && (
        <div className="absolute inset-0 bg-blue-100 bg-opacity-50 rounded-lg" />
      )}
    </div>
  );
};

export default ResizableImage;
