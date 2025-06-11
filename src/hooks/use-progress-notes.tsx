import { useEffect, useState } from "react";

export interface IProgressNote {
  id: string;
  taskId: string;
  note: string;
  date: Date;
  type: "success" | "issue" | "observation";
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-600";
    case "inProgress":
      return "bg-yellow-600";
    default:
      return "bg-slate-600";
  }
};

export const getProgressPercentage = (status: string) => {
  switch (status) {
    case "completed":
      return 100;
    case "in-progress":
      return 50;
    default:
      return 0;
  }
};

const STORAGE_KEY = "progressNotes";

export function useProgressNotes() {
  const [progressNotes, setProgressNotes] = useState<IProgressNote[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const withDates = parsed.map((note: any) => ({
          ...note,
          date: new Date(note.date),
        }));
        setProgressNotes(withDates);
      } catch (err) {
        console.error("Failed to load progress notes:", err);
      }
    }
  }, []);

  // Save note to storage
  const saveToStorage = (notes: IProgressNote[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  };

  // Create Note
  const addProgressNote = (
    taskId: string,
    note: string,
    type: "success" | "issue" | "observation"
  ) => {
    if (!note.trim()) return;

    const newNote: IProgressNote = {
      id: Math.random().toString(36).substring(7),
      taskId,
      note,
      date: new Date(),
      type,
    };

    const updatedNotes = [...progressNotes, newNote];
    setProgressNotes(updatedNotes);
    saveToStorage(updatedNotes);
    return newNote;
  };

  // Update Note
  const updateProgressNote = (noteId: string, updatedNote: string) => {
    const updatedNotes = progressNotes.map((note) =>
      note.id === noteId ? { ...note, note: updatedNote } : note
    );
    setProgressNotes(updatedNotes);
    saveToStorage(updatedNotes);
  };

  // Delete Note
  const deleteProgressNote = (noteId: string) => {
    const updatedNotes = progressNotes.filter((note) => note.id !== noteId);
    setProgressNotes(updatedNotes);
    saveToStorage(updatedNotes);
  };

  // Get Notes
  const getTaskNotes = (taskId: string) => {
    return progressNotes.filter((note) => note.taskId === taskId);
  };

  return {
    progressNotes,
    addProgressNote,
    updateProgressNote,
    deleteProgressNote,
    getTaskNotes,
  };
}
