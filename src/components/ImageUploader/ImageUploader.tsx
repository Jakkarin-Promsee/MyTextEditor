import React, { useState, useRef, useCallback } from "react";
import type { ImageData } from "./types";
import { Upload, X } from "lucide-react";

interface Props {
  onImageUpload: (img: ImageData) => void;
  onClose: () => void;
}

const ImageUploader: React.FC<Props> = ({ onImageUpload, onClose }) => {
  const [dragActive, setDragActive] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type !== "dragleave");
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      handleDrag(e);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleDrag]
  );

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      onImageUpload({
        id: `${Date.now()}`,
        src,
        alt: file.name,
        width: 400,
        height: 300,
      });
      onClose();
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = () => {
    if (!imageUrl.trim()) return;
    onImageUpload({
      id: `${Date.now()}`,
      src: imageUrl.trim(),
      alt: "Uploaded image",
      width: 400,
      height: 300,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Add Image</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:bg-gray-100 rounded-lg p-1" />
          </button>
        </div>
        <div className="space-y-4">
          <div
            className={`
              border-2 border-dashed rounded-lg p-6 text-center transition-colors
              ${
                dragActive
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }
            `}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-2">
              Drag & drop or select file
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Select File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                e.target.files?.[0] && handleFile(e.target.files[0])
              }
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Or enter image URL:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleUrlSubmit}
                disabled={!imageUrl.trim()}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-sm"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
