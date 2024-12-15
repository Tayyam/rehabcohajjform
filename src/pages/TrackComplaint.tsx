import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { TextField } from '../components/forms/TextField';
import { Button } from '../components/Button';
import { useTranslation } from '../hooks/useTranslation';

export const TrackComplaint: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [error, setError] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const complaintId = formData.get('complaintId') as string;
    
    if (!complaintId) {
      setError(t.trackComplaint.error);
      return;
    }
    
    navigate(`/track-complaint/${complaintId}`);
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#F4F5FA] p-8 rounded-xl shadow-md border border-[#E1E6F0]">
      <h1 className="text-3xl font-bold text-[#2B3E89] mb-8">{t.trackComplaint.title}</h1> 
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          name="complaintId"
          label={t.trackComplaint.label}
          required
          placeholder={t.trackComplaint.placeholder}
          error={error}
          className="bg-white border-[#E1E6F0] focus:border-[#2B3E89] focus:ring-[#2B3E89] transition-colors"
        />
        
        {error && (
          <div className="text-[#C62F3C] bg-[#FDE8E9] border border-[#F4A261] px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        <div className="flex justify-end">
          <Button
            type="submit"
            className="flex items-center gap-2 bg-[#2B3E89] text-white hover:bg-[#212C6C] transition-all"
          >
            <Search className="h-5 w-5 text-white" />
            <span>{t.trackComplaint.button}</span> 
          </Button>
        </div>
      </form>
    </div>
  );
};
