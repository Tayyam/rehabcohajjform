import React from 'react';
import { cn } from '../../../lib/utils';
import { IMAGE_CONFIG } from '../../../lib/config';
import { ImagePreview } from './ImagePreview';
import { UploadPlaceholder } from './UploadPlaceholder';
import { useImageUpload } from './useImageUpload';

interface ImageUploadProps {
  onChange: (file: File | null) => void;
  error?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  error,
}) => {
  const {
    preview,
    isDragging,
    fileInputRef,
    setIsDragging,
    handleFileChange,
    removeImage,
  } = useImageUpload(onChange);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files[0]);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        صورة البلاغ (اختياري)
      </label>
      
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors',
          isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-500',
          error ? 'border-red-500' : ''
        )}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={IMAGE_CONFIG.ACCEPTED_TYPES.join(',')}
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        />

        {preview ? (
          <ImagePreview src={preview} onRemove={removeImage} />
        ) : (
          <UploadPlaceholder isDragging={isDragging} />
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};