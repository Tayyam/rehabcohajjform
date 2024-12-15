import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  src: string;
  onRemove: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ src, onRemove }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt="Preview"
        className="max-h-64 mx-auto rounded-lg"
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};