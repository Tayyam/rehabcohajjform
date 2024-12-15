import { collection, addDoc, doc, getDoc, updateDoc, query, where, getDocs, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import type { Complaint } from '../types/complaint';
import type { Note } from '../types/note';
import type { ComplaintStatus } from '../types/status';

export async function createComplaint(complaint: Omit<Complaint, 'id' | 'status' | 'createdAt'>) {
  const complaintData = {
    ...complaint,
    status: 'open' as ComplaintStatus,
    createdAt: serverTimestamp(),
  };
  
  const docRef = await addDoc(collection(db, 'complaints'), complaintData);
  return docRef.id;
}

export async function getComplaint(id: string) {
  const docRef = doc(db, 'complaints', id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    throw new Error('البلاغ غير موجود');
  }
  
  return { id: docSnap.id, ...docSnap.data() } as Complaint;
}

export async function updateComplaintStatus(id: string, status: ComplaintStatus, note?: string) {
  const complaintRef = doc(db, 'complaints', id);
  
  await updateDoc(complaintRef, { 
    status,
    ...(note && {
      updates: [{
        timestamp: new Date(),
        message: note
      }]
    })
  });
  
  if (note) {
    await addNote(id, note);
  }
}

export async function addNote(complaintId: string, content: string) {
  const complaint = await getComplaint(complaintId);
  
  const noteData = {
    complaintId,
    content,
    author: complaint.pilgrimName,
    createdAt: serverTimestamp(),
  };
  
  return addDoc(collection(db, 'notes'), noteData);
}

export async function getNotesByComplaintId(complaintId: string): Promise<Note[]> {
  const q = query(
    collection(db, 'notes'),
    where('complaintId', '==', complaintId),
    orderBy('createdAt', 'desc')
  );
  
  const querySnapshot = await getDocs(q);
  const complaint = await getComplaint(complaintId);
  
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    const author = data.author.match(/^[A-Za-z0-9]{28}$/) ? 'الدعم الفني' : complaint.pilgrimName;
    
    return {
      id: doc.id,
      ...data,
      author,
    } as Note;
  });
}