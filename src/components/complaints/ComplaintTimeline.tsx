import React from 'react';
import type { Complaint } from '../../types/complaint';
import { formatDate } from '../../lib/dates';
import { useTranslation } from '../../hooks/useTranslation';

interface ComplaintTimelineProps {
  complaint: Complaint;
}

export const ComplaintTimeline: React.FC<ComplaintTimelineProps> = ({ complaint }) => {
  const { t } = useTranslation(); // Use translation hook

  // Create timeline items from complaint data
  const timelineItems = [
    {
      title: t.complaintTimeline.created, // Translation
      date: complaint.createdAt,
      description: `${t.complaintTimeline.by}: ${complaint.pilgrimName}`, // Translation
    },
    // Add more timeline items based on updates if available
    ...(complaint.updates || []).map(update => ({
      title: t.complaintTimeline.statusUpdate, // Translation
      date: update.timestamp,
      description: update.message,
      author: t.complaintTimeline.support, // Translation
    })),
  ];

  return (
    <div className="relative space-y-4">
      {timelineItems.map((item, index) => (
        <div key={index} className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-teal-600 rounded-full" />
            {index !== timelineItems.length - 1 && (
              <div className="flex-1 w-px bg-gray-300 my-1" />
            )}
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-4">
            <div className="font-medium text-gray-900">{item.title}</div>
            <div className="text-sm text-gray-500 mt-1">{formatDate(item.date)}</div>
            {item.description && (
              <div className="text-sm text-gray-600 mt-2">
                {item.description}
                {item.author && ` - ${item.author}`}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
