import React, { useEffect, useState } from 'react';
import { getNotesByComplaintId, addNote } from '../../lib/complaints';
import { Button } from '../ui/Button';
import { MessageCircle, Send, User } from 'lucide-react';
import type { Note } from '../../types/note';
import { formatDate } from '../../lib/dates';
import { useTranslation } from '../../hooks/useTranslation';

interface ComplaintNotesProps {
  complaintId: string;
}

export const ComplaintNotes: React.FC<ComplaintNotesProps> = ({ complaintId }) => {
  const { t } = useTranslation();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const loadNotes = () => {
    getNotesByComplaintId(complaintId)
      .then(setNotes)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadNotes();
  }, [complaintId]);

  const handleSubmitNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setSubmitting(true);
    try {
      await addNote(complaintId, newNote.trim());
      setNewNote('');
      loadNotes();
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto"></div>
        <p className="mt-2 text-gray-600">{t.complaintNotes.loading}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-teal-600" />
        <span>{t.complaintNotes.title}</span>
      </h2>

      <div className="space-y-6">
        {notes.map((note) => {
          const isSupport = note.author === 'الدعم الفني';
          return (
            <div key={note.id} className="flex gap-3">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isSupport ? 'bg-teal-100' : 'bg-[#DECDBB]'
                }`}>
                  <User className={`h-5 w-5 ${
                    isSupport ? 'text-teal-600' : 'text-[#8B7355]'
                  }`} />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-medium ${
                    isSupport ? 'text-teal-700' : 'text-[#8B7355]'
                  }`}>
                    {note.author}
                  </span>
                  <time className="text-sm text-gray-500" dateTime={note.createdAt?.toString?.() || ''}>
                    {formatDate(note.createdAt)}
                  </time>
                </div>
                <div className={`rounded-lg p-3 ${
                  isSupport ? 'bg-teal-50 text-teal-800' : 'bg-[#F5EFE6] text-[#6B5B45]'
                }`}>
                  {note.content}
                </div>
              </div>
            </div>
          );
        })}
        
        {notes.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            {t.complaintNotes.noComments}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmitNote} className="mt-6">
        <div className="relative">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder={t.complaintNotes.placeholder}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            rows={3}
          />
          <Button
            type="submit"
            disabled={submitting || !newNote.trim()}
            className="absolute left-2 bottom-2 !p-2"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};