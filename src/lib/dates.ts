export function formatDate(date: Date | string | number | { seconds: number } | null): string {
  if (!date) return 'تاريخ غير متوفر';
  
  try {
    // Handle Firestore Timestamp
    if (typeof date === 'object' && 'seconds' in date) {
      return new Intl.DateTimeFormat('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(new Date(date.seconds * 1000));
    }

    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return 'تاريخ غير صالح';
    }
    
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(d);
  } catch (error) {
    return 'تاريخ غير صالح';
  }
}