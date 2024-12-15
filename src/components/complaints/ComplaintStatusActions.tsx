import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { updateComplaintStatus } from '../../lib/complaints';
import type { ComplaintStatus } from '../../types/status';
import { useTranslation } from '../../hooks/useTranslation';

interface ComplaintStatusActionsProps {
  complaintId: string;
  currentStatus: ComplaintStatus;
  onStatusUpdate: () => void;
}

export const ComplaintStatusActions: React.FC<ComplaintStatusActionsProps> = ({
  complaintId,
  currentStatus,
  onStatusUpdate,
}) => {
  const { t } = useTranslation(); // Use translation hook
  const [loading, setLoading] = useState(false);

  const handleStatusUpdate = async (newStatus: ComplaintStatus) => {
    if (loading) return;
    
    setLoading(true);
    try {
      await updateComplaintStatus(complaintId, newStatus);
      onStatusUpdate();
    } finally {
      setLoading(false);
    }
  };

  // Only show actions if the complaint can be closed or reopened
  if (currentStatus !== 'open' && currentStatus !== 'closed') {
    return null;
  }

  return (
    <div className="flex gap-3">
      {currentStatus === 'closed' && (
        <Button
          onClick={() => handleStatusUpdate('open')}
          disabled={loading}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700"
        >
          {t.complaintStatusActions.reopen} 
        </Button>
      )}
      
      {currentStatus === 'open' && (
        <Button
          onClick={() => handleStatusUpdate('closed')}
          disabled={loading}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700"
        >
          {t.complaintStatusActions.close} 
        </Button>
      )}
    </div>
  );
};
