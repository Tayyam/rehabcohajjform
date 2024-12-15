import React from 'react';
import { cn } from '../../lib/utils';
import type { ComplaintStatus } from '../../types/status';
import { STATUS_COLORS, STATUS_LABELS } from '../../types/status';

interface StatusBadgeProps {
  status: ComplaintStatus;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  return (
    <div className={cn(
      'flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold',
      STATUS_COLORS[status],
      className
    )}>
      <span className={cn(
        'h-2.5 w-2.5 rounded-full',
        status === 'open' && 'bg-blue-500',
        status === 'in-progress' && 'bg-yellow-500',
        status === 'rejected' && 'bg-red-500',
        status === 'closed' && 'bg-blue-500'
      )} />
      {STATUS_LABELS[status]}
    </div>
  );
};