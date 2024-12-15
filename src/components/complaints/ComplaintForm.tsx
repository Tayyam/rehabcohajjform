import React, { useState } from 'react';
import { TextField } from '../forms/TextField';
import { TextArea } from '../forms/TextArea';
import { Select } from '../forms/Select';
import { ImageUpload } from '../forms/ImageUpload';
import { PhoneNumberInput } from '../forms/PhoneInput';
import { Button } from '../ui/Button';
import { CATEGORIES, PRIORITIES, COMPLAINT_TYPES } from '../../lib/constants';
import { FileText, AlertTriangle, User, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { validatePassport } from '../../lib/validation';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../hooks/useLanguage';

interface ComplaintFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onImageChange?: (file: File | null) => void;
  onPhoneChange: (value: string) => void;
  phoneNumber: string;
  loading?: boolean;
  error?: string;
  onCancel: () => void;
}

export const ComplaintForm: React.FC<ComplaintFormProps> = ({
  onSubmit,
  onImageChange,
  onPhoneChange,
  phoneNumber,
  loading,
  error,
  onCancel,
}) => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [passportError, setPassportError] = useState<string>();

  const handlePassportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !validatePassport(value)) {
      setPassportError(t.complaintForm.passportError);
    } else {
      setPassportError(undefined);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const passportNumber = form.passportNumber.value;

    if (passportNumber && !validatePassport(passportNumber)) {
      e.preventDefault();
      setPassportError(t.complaintForm.passportError);
      return;
    }

    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#F4F5FA] rounded-xl shadow-sm border border-[#E1E6F0] p-8">
      {error && (
        <div className="mb-6 bg-[#FDE8E9] border border-[#F4A261] text-[#C62F3C] px-4 py-3 rounded-lg flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-[#C62F3C]" />
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-[#2B3E89] mb-6 flex items-center gap-2">
            <User className="h-5 w-5 text-[#2B3E89]" />
            <span>{t.complaintForm.pilgrimInfo}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              name="pilgrimName"
              label={t.complaintForm.pilgrimName}
              required
              placeholder={t.complaintForm.pilgrimNamePlaceholder}
              className="bg-white border-[#E1E6F0] focus:border-[#2B3E89] focus:ring-[#2B3E89] transition-colors"
            />
            
            <TextField
              name="passportNumber"
              label={t.complaintForm.passportNumber}
              placeholder={t.complaintForm.passportPlaceholder}
              className="bg-white border-[#E1E6F0] focus:border-[#C62F3C] focus:ring-[#C62F3C] transition-colors"
              onChange={handlePassportChange}
              error={passportError}
            />

            <PhoneNumberInput
              value={phoneNumber}
              onChange={onPhoneChange}
              label={t.complaintForm.phoneNumber}
              className="bg-white border-[#E1E6F0] focus:border-[#2B3E89] focus:ring-[#2B3E89] transition-colors"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#2B3E89] mb-6 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#C62F3C]" />
            <span>{t.complaintForm.complaintDetails}</span>
          </h2>
          
          <div className="space-y-6">
            <Select
              name="type"
              label={t.complaintForm.type}
              options={COMPLAINT_TYPES[currentLanguage]}
              required
              defaultValue="inquiry"
              className="bg-white border-[#E1E6F0] focus:border-[#2B3E89] focus:ring-[#2B3E89] transition-colors"
            />
            
            <TextField
              name="title"
              label={t.complaintForm.title}
              required
              placeholder={t.complaintForm.titlePlaceholder}
              className="bg-white border-[#E1E6F0] focus:border-[#C62F3C] focus:ring-[#C62F3C] transition-colors"
            />
            
            <TextArea
              name="description"
              label={t.complaintForm.description}
              required
              rows={4}
              placeholder={t.complaintForm.descriptionPlaceholder}
              className="bg-white border-[#E1E6F0] focus:border-[#2B3E89] focus:ring-[#2B3E89] transition-colors"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                name="category"
                label={t.complaintForm.category}
                options={CATEGORIES[currentLanguage]}
                required
                className="bg-white border-[#E1E6F0] focus:border-[#2B3E89] focus:ring-[#2B3E89] transition-colors"
              />
              
              <Select
                name="priority"
                label={t.complaintForm.priority}
                options={PRIORITIES[currentLanguage]}
                required
                className="bg-white border-[#E1E6F0] focus:border-[#C62F3C] focus:ring-[#C62F3C] transition-colors"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#2B3E89] mb-6 flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-[#2B3E89]" />
            <span>{t.complaintForm.attachments}</span>
          </h2>
          
          <ImageUpload onChange={onImageChange || (() => {})} />
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          className="min-w-[120px] bg-[#EAF0FA] text-[#2B3E89] hover:bg-[#D9E2F5]"
        >
          {t.complaintForm.cancel}
        </Button>
        <Button
          type="submit"
          disabled={loading || !!passportError}
          className="min-w-[120px] flex items-center justify-center gap-2 bg-[#C62F3C] text-white hover:bg-[#A22731]"
        >
          <FileText className="h-5 w-5 text-white" />
          <span>{loading ? t.complaintForm.sending : t.complaintForm.submit}</span>
        </Button>
      </div>
    </form>
  );
};
