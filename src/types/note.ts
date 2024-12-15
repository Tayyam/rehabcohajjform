export interface Note {
  id: string;
  complaintId: string;
  content: string;
  author: string;
  createdAt: Date | string;
}