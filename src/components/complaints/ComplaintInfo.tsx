import React from 'react';
import { Complaint } from '../../types/complaint';
import { CATEGORIES, PRIORITIES, COMPLAINT_TYPES } from '../../lib/constants';
import { FileText, User, FileCheck, Phone, MessageSquare } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../hooks/useLanguage';

interface ComplaintInfoProps {
  complaint: Complaint;
}

const InfoItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
    <div className="text-gray-400">{icon}</div>
    <div>
      <dt className="text-sm font-medium text-gray-500 mb-1">{label}</dt>
      <dd className="text-lg text-gray-900">{value}</dd>
    </div>
  </div>
);

export const ComplaintInfo: React.FC<ComplaintInfoProps> = ({ complaint }) => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const typeLabel = COMPLAINT_TYPES[currentLanguage]?.find(t => t.value === complaint.type)?.label || complaint.type;
  const categoryLabel = CATEGORIES[currentLanguage]?.find(c => c.value === complaint.category)?.label || complaint.category;
  const priorityLabel = PRIORITIES[currentLanguage]?.find(p => p.value === complaint.priority)?.label || complaint.priority;

  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InfoItem
        icon={<User className="h-5 w-5" />}
        label={t.complaintInfo.pilgrimName}
        value={complaint.pilgrimName}
      />

      <InfoItem
        icon={<MessageSquare className="h-5 w-5" />}
        label={t.complaintInfo.type}
        value={typeLabel}
      />

      {complaint.phoneNumber && (
        <InfoItem
          icon={<Phone className="h-5 w-5" />}
          label={t.complaintInfo.phoneNumber}
          value={complaint.phoneNumber}
        />
      )}

      {complaint.passportNumber && (
        <InfoItem
          icon={<FileCheck className="h-5 w-5" />}
          label={t.complaintInfo.passportNumber}
          value={complaint.passportNumber}
        />
      )}

      <InfoItem
        icon={<FileText className="h-5 w-5" />}
        label={t.complaintInfo.category}
        value={categoryLabel}
      />
    </dl>
  );
};