import { useState, useEffect, useCallback } from 'react';
import { getComplaint } from '../complaints';
import type { Complaint } from '../../types/complaint';

export function useComplaint(id: string | undefined) {
  const [complaint, setComplaint] = useState<Complaint>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);

  const fetchComplaint = useCallback(async () => {
    if (!id) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const data = await getComplaint(id);
      setComplaint(data);
      setError(undefined);
    } catch (err) {
      setError('لم يتم العثور على البلاغ');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchComplaint();
  }, [fetchComplaint]);

  return { complaint, error, loading, refetch: fetchComplaint };
}