import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Home, Search, Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from '../hooks/useTranslation';

export const ComplaintSuccess: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation(); // Use translation hook
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(t.complaintSuccess.copyError, err); // Translation
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12">
          <div className="mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t.complaintSuccess.title} 
          </h1>
          
         
          <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block">
            <p className="text-gray-600 mb-1 text-sm">
              {t.complaintSuccess.complaintIdLabel}
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl font-bold text-gray-900 font-mono">{id}</p>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-md hover:bg-gray-200 transition-colors"
                title={t.complaintSuccess.copyTitle}
              >
                {copied ? (
                  <Check className="h-5 w-5 text-blue-600" />
                ) : (
                  <Copy className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          
        
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            {t.complaintSuccess.instructions} 
          </p>
          
        
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              as={Link}
              to="/"
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <Home className="h-5 w-5" />
              <span>{t.complaintSuccess.homeButton}</span>
            </Button>
            
            <Button
              as={Link}
              to={`/track-complaint/${id}`}
              className="flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              <span>{t.complaintSuccess.trackButton}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
