import { useState } from "react";

export interface ProgressNote {
  id: string;
  taskId: string;
  note: string;
  date: Date;
  type: "success" | "issue" | "observation";
}

// Shared state for progress notes
let sharedProgressNotes: ProgressNote[] = [];
let sharedSetProgressNotes: ((notes: ProgressNote[]) => void) | null = null;

export function useProgressNotes() {
  const [progressNotes, setProgressNotes] = useState<ProgressNote[]>(sharedProgressNotes);

  // Initialize shared state
  if (!sharedSetProgressNotes) {
    sharedSetProgressNotes = (notes: ProgressNote[]) => {
      sharedProgressNotes = notes;
      setProgressNotes(notes);
    };
  }

  const addProgressNote = (taskId: string, note: string, type: "success" | "issue" | "observation") => {
    if (!note.trim()) return;

    const newNote: ProgressNote = {
      id: Math.random().toString(36).substring(7),
      taskId,
      note,
      date: new Date(),
      type
    };

    const updatedNotes = [...sharedProgressNotes, newNote];
    sharedProgressNotes = updatedNotes;
    setProgressNotes(updatedNotes);
    return newNote;
  };

  const updateProgressNote = (noteId: string, updatedNote: string) => {
    const updatedNotes = sharedProgressNotes.map(note => 
      note.id === noteId ? { ...note, note: updatedNote } : note
    );
    sharedProgressNotes = updatedNotes;
    setProgressNotes(updatedNotes);
  };

  const deleteProgressNote = (noteId: string) => {
    const updatedNotes = sharedProgressNotes.filter(note => note.id !== noteId);
    sharedProgressNotes = updatedNotes;
    setProgressNotes(updatedNotes);
  };

  const getTaskNotes = (taskId: string) => {
    return sharedProgressNotes.filter(note => note.taskId === taskId);
  };

  return {
    progressNotes,
    addProgressNote,
    updateProgressNote,
    deleteProgressNote,
    getTaskNotes
  };
}
