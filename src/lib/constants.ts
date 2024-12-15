import type { ComplaintCategory, ComplaintPriority, ComplaintType } from '../types/complaint';

export const COMPLAINT_TYPES: Record<string, { value: ComplaintType; label: string }[]> = {
  ar: [
    { value: 'inquiry', label: 'استفسار' },
    { value: 'complaint', label: 'بلاغ' },
  ],
  it: [
    { value: 'inquiry', label: 'Richiesta di informazioni' },
    { value: 'complaint', label: 'Reclamo' },
  ],
  fr: [
    { value: 'inquiry', label: 'Demande de renseignement' },
    { value: 'complaint', label: 'Plainte' },
  ],
  en: [
    { value: 'inquiry', label: 'Inquiry' },
    { value: 'complaint', label: 'Complaint' },
  ],
};

export const CATEGORIES: Record<string, { value: ComplaintCategory; label: string }[]> = {
  ar: [
    { value: 'administrative', label: 'إداري' },
    { value: 'health', label: 'صحي' },
    { value: 'transport', label: 'نقل' },
    { value: 'accommodation', label: 'سكن' },
    { value: 'food', label: 'تغذية' },
  ],
  it: [
    { value: 'administrative', label: 'Amministrativo' },
    { value: 'health', label: 'Salute' },
    { value: 'transport', label: 'Trasporti' },
    { value: 'accommodation', label: 'Alloggio' },
    { value: 'food', label: 'Cibo' },
  ],
  fr: [
    { value: 'administrative', label: 'Administratif' },
    { value: 'health', label: 'Santé' },
    { value: 'transport', label: 'Transport' },
    { value: 'accommodation', label: 'Hébergement' },
    { value: 'food', label: 'Alimentation' },
  ],
  en: [
    { value: 'administrative', label: 'Administrative' },
    { value: 'health', label: 'Health' },
    { value: 'transport', label: 'Transport' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'food', label: 'Food' },
  ],
};

export const PRIORITIES: Record<string, { value: ComplaintPriority; label: string }[]> = {
  ar: [
    { value: 'low', label: 'منخفضة' },
    { value: 'medium', label: 'متوسطة' },
    { value: 'high', label: 'عالية' },
  ],
  it: [
    { value: 'low', label: 'Bassa' },
    { value: 'medium', label: 'Media' },
    { value: 'high', label: 'Alta' },
  ],
  fr: [
    { value: 'low', label: 'Basse' },
    { value: 'medium', label: 'Moyenne' },
    { value: 'high', label: 'Haute' },
  ],
  en: [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ],
};
