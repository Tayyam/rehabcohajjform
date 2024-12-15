import { useState, useRef } from 'react';
import { IMAGE_CONFIG } from '../../../lib/config';

export function useImageUpload(onChange: (file: File | null) => void) {
  const [preview, setPreview] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!IMAGE_CONFIG.ACCEPTED_TYPES.includes(file.type)) {
      return 'يجب أن تكون الصورة بإحدى الصيغ التالية: JPG, PNG, GIF, WEBP';
    }
    if (file.size > IMAGE_CONFIG.MAX_SIZE) {
      return 'حجم الصورة يجب أن لا يتجاوز 32 ميجابايت';
    }
    return null;
  };

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setPreview('');
      onChange(null);
      return;
    }

    const error = validateFile(file);
    if (error) {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      alert(error);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onChange(file);
  };

  const removeImage = () => {
    setPreview('');
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return {
    preview,
    isDragging,
    fileInputRef,
    setIsDragging,
    handleFileChange,
    removeImage,
  };
}