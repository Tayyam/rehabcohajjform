import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTranslation } from '../../hooks/useTranslation';

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const MAX_FILE_SIZE = 32 * 1024 * 1024;

interface ImageUploadProps {
  onChange: (file: File | null) => void;
  error?: string;
  value?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  error,
  value
}) => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState<string>(value || '');
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      return t.imageUpload.invalidType;
    }
    if (file.size > MAX_FILE_SIZE) {
      return t.imageUpload.maxSizeExceeded;
    }
    return null;
  };

  const handleFileChange = async (file: File | null) => {
    if (!file) {
      setPreview('');
      onChange(null);
      return;
    }

    const validationError = validateFile(file);
    if (validationError) {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      alert(validationError);
      return;
    }

    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        onChange(file);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setIsLoading(false);
      alert(t.imageUpload.loadError);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeImage = () => {
    setPreview('');
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {t.imageUpload.label}
      </label>
      
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors',
          isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-500',
          error ? 'border-red-500' : ''
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_IMAGE_TYPES.join(',')}
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          disabled={isLoading}
        />

        {isLoading ? (
          <div className="py-8">
            <div className="mb-3 flex justify-center">
              <Loader className="h-12 w-12 text-teal-500 animate-spin" />
            </div>
            <p className="text-gray-600">{t.imageUpload.loading}</p>
          </div>
        ) : preview ? (
          <div className="relative">
            <img
              src={preview}
              alt={t.imageUpload.previewAlt}
              className="max-h-64 mx-auto rounded-lg"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="py-8">
            <div className="mb-3 flex justify-center">
              {isDragging ? (
                <Upload className="h-12 w-12 text-teal-500" />
              ) : (
                <ImageIcon className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <p className="text-gray-600 mb-1">
              {t.imageUpload.dragAndDrop}
            </p>
            <p className="text-sm text-gray-500">
              {t.imageUpload.supportedFormats}
            </p>
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};