import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComplaintForm } from '../components/complaints/ComplaintForm';
import { createComplaint } from '../lib/complaints';
import { uploadImage } from '../lib/api/imgbb';
import { ArrowRight } from 'lucide-react';
import type { ComplaintCategory, ComplaintPriority, ComplaintType } from '../types/complaint';
import { useTranslation } from '../hooks/useTranslation';

export const NewComplaint: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Use translation hook
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);

    const formData = new FormData(e.currentTarget);
    
    try {
      let imageData = undefined;
      
      if (imageFile) {
        try {
          const response = await uploadImage(imageFile);
          imageData = {
            imageUrl: response.data.url,
            imageDeleteUrl: response.data.delete_url
          };
        } catch (uploadError) {
          setError(t.newComplaint.uploadError); // Translation
          setLoading(false);
          return;
        }
      }

      const complaintId = await createComplaint({
        type: formData.get('type') as ComplaintType || 'inquiry',
        pilgrimName: formData.get('pilgrimName') as string,
        passportNumber: formData.get('passportNumber') as string || undefined,
        phoneNumber: phoneNumber || undefined,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as ComplaintCategory,
        priority: formData.get('priority') as ComplaintPriority,
        deliveryMethod: 'website',
        ...(imageData && imageData),
      });
      
      navigate(`/complaint-success/${complaintId}`);
    } catch (err) {
      setError(t.newComplaint.submitError); // Translation
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <button 
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-teal-600 transition-colors"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">{t.newComplaint.title}</h1> 
      </div>

      <ComplaintForm
        onSubmit={handleSubmit}
        onImageChange={setImageFile}
        onPhoneChange={setPhoneNumber}
        phoneNumber={phoneNumber}
        loading={loading}
        error={error}
        onCancel={() => navigate('/')}
      />
    </div>
  );
};
