import type { ComplaintStatus } from './status';

export type ComplaintCategory = 'administrative' | 'health' | 'transport' | 'accommodation' | 'food';
export type ComplaintPriority = 'low' | 'medium' | 'high';
export type ComplaintType = 'inquiry' | 'complaint';
export type DeliveryMethod = 'website' | 'mobile' | 'kiosk';

export interface ComplaintUpdate {
  timestamp: Date;
  message: string;
}

export interface Complaint {
  id?: string;
  type: ComplaintType;
  pilgrimName: string;
  passportNumber?: string;
  phoneNumber?: string;
  title: string;
  description: string;
  category: ComplaintCategory;
  priority: ComplaintPriority;
  status: ComplaintStatus;
  createdAt: Date;
  imageUrl?: string;
  imageDeleteUrl?: string;
  updates?: ComplaintUpdate[];
  deliveryMethod: DeliveryMethod;
}