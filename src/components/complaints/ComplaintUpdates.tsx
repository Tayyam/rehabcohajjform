import React from 'react';
import type { ComplaintUpdate } from '../../types/complaint';
import { MessageSquare } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface ComplaintUpdatesProps {
  updates: ComplaintUpdate[];
}

export const ComplaintUpdates: React.FC<ComplaintUpdatesProps> = ({ updates }) => {
  const { t } = useTranslation(); // Use translation hook

  if (updates.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-teal-600" />
        <span>{t.complaintUpdates.title}</span>
      </h2>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div
            key={index}
            className="relative pr-8 pb-8 last:pb-0"
          >
            {index !== updates.length - 1 && (
              <div className="absolute right-3 top-3 bottom-0 w-0.5 bg-gray-200" />
            )}
            
            <div className="absolute right-0 top-1.5 h-6 w-6 rounded-full border-2 border-teal-600 bg-white" />
            
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{update.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(update.timestamp).toLocaleString(t.complaintUpdates.locale)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
