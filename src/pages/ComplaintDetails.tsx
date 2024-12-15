import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { StatusBadge } from '../components/ui/StatusBadge';
import { ComplaintInfo } from '../components/complaints/ComplaintInfo';
import { ComplaintUpdates } from '../components/complaints/ComplaintUpdates';
import { ComplaintNotes } from '../components/complaints/ComplaintNotes';
import { ComplaintStatusActions } from '../components/complaints/ComplaintStatusActions';
import { ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { useComplaint } from '../lib/hooks/useComplaint';
import { formatDate } from '../lib/dates';
import { useTranslation } from '../hooks/useTranslation';

export const ComplaintDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation(); // Use translation hook
  const { complaint, error, loading, refetch } = useComplaint(id);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t.complaintDetails.loading}</p> 
        </div>
      </div>
    );
  }

  if (error || !complaint) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 text-lg mb-6">{error || t.complaintDetails.error}</p> 
          <Button as={Link} to="/track-complaint" className="inline-flex items-center gap-2">
            <ArrowRight className="h-5 w-5" />
            <span>{t.complaintDetails.backToTracking}</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {complaint.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatDate(complaint.createdAt)}</span>
              </div>
              <div>
                {t.complaintDetails.complaintId}: <span className="font-medium">{complaint.id}</span>
              </div>
            </div>
          </div>
          <StatusBadge status={complaint.status} />
        </div>

        <ComplaintInfo complaint={complaint} />
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {t.complaintDetails.updateStatus}
        </h2>
        <ComplaintStatusActions
          complaintId={complaint.id!}
          currentStatus={complaint.status}
          onStatusUpdate={refetch}
        />
      </div>

     
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {t.complaintDetails.description} 
        </h2>
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {complaint.description}
        </p>
      </div>

   
      {complaint.updates && complaint.updates.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <ComplaintUpdates updates={complaint.updates} />
        </div>
      )}

     
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <ComplaintNotes complaintId={complaint.id!} />
      </div>

     
      <div className="flex justify-center py-4">
        <Button
          as={Link}
          to="/track-complaint"
          variant="secondary"
          className="inline-flex items-center gap-2"
        >
          <ArrowRight className="h-5 w-5" />
          <span>{t.complaintDetails.backToTracking}</span> 
        </Button>
      </div>
    </div>
  );
};
