import React from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface UploadPlaceholderProps {
  isDragging: boolean;
}

export const UploadPlaceholder: React.FC<UploadPlaceholderProps> = ({ isDragging }) => {
  return (
    <div className="py-8">
      <div className="mb-3 flex justify-center">
        {isDragging ? (
          <Upload className="h-12 w-12 text-teal-500" />
        ) : (
          <ImageIcon className="h-12 w-12 text-gray-400" />
        )}
      </div>
      <p className="text-gray-600 mb-1">
        اسحب وأفلت الصورة هنا أو اضغط للاختيار
      </p>
      <p className="text-sm text-gray-500">
        JPG, PNG, GIF, WEBP (الحد الأقصى: 32 ميجابايت)
      </p>
    </div>
  );
};