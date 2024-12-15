export type ComplaintStatus = 'open' | 'in-progress' | 'rejected' | 'closed';

export const STATUS_LABELS: Record<ComplaintStatus, string> = {
  'open': 'مفتوح',
  'in-progress': 'قيد المعالجة',
  'rejected': 'مرفوض',
  'closed': 'مغلق'
};

export const STATUS_COLORS: Record<ComplaintStatus, string> = {
  'open': 'bg-blue-100 text-blue-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'rejected': 'bg-red-100 text-red-800',
  'closed': 'bg-blue-100 text-blue-800'
};