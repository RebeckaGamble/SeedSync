import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ITask } from "@/types/task-types";
import {
  Edit,
  MessageSquare,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ProgressNote } from "@/hooks/use-progress-notes";
import { Button } from "@/components/ui/button";

interface IProgressProps {
  tasks: ITask[];
  onAddProgressNote: (
    taskId: string,
    note: string,
    type: "success" | "issue" | "observation"
  ) => void;
  onUpdateProgressNote: (noteId: string, updatedNote: string) => void;
  onDeleteProgressNote: (noteId: string) => void;
  getTaskNotes: (taskId: string) => ProgressNote[];
}

const ProgressContent = ({
  tasks,
  onAddProgressNote,
  onUpdateProgressNote,
  onDeleteProgressNote,
  getTaskNotes,
}: IProgressProps) => {
  const { t } = useTranslation();
  const [newNote, setNewNote] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [noteType, setNoteType] = useState<"success" | "issue" | "observation">(
    "observation"
  );
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteText, setEditingNoteText] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-600";
      case "in-progress":
        return "bg-yellow-600";
      default:
        return "bg-slate-600";
    }
  };

  const getProgressPercentage = (status: string) => {
    switch (status) {
      case "completed":
        return 100;
      case "in-progress":
        return 50;
      default:
        return 0;
    }
  };

  const getOverallProgress = () => {
    if (tasks.length === 0) return 0;
    const totalProgress = tasks.reduce(
      (sum, task) => sum + getProgressPercentage(task.status),
      0
    );
    return Math.round(totalProgress / tasks.length);
  };

  const addProgressNote = () => {
    if (!newNote.trim() || !selectedTaskId) return;

    onAddProgressNote(selectedTaskId, newNote, noteType);
    setNewNote("");
    setSelectedTaskId(null);
  };

  const handleEditNote = (note: ProgressNote) => {
    setEditingNoteId(note.id);
    setEditingNoteText(note.note);
  };

  const saveEditedNote = () => {
    if (!editingNoteText.trim() || !editingNoteId) return;

    onUpdateProgressNote(editingNoteId, editingNoteText);
    setEditingNoteId(null);
    setEditingNoteText("");
  };

  const cancelEditNote = () => {
    setEditingNoteId(null);
    setEditingNoteText("");
  };

  return (
    <div>
      <div className="flex flex-col items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          Progress
        </h2>
        <div className="w-full">
          <Card className="border-border shadow-md">
            <CardHeader>
              <CardTitle>Progress Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex text-secondary-foreground justify-between text-sm mb-2">
                    <span>
                      Overall Progress
                    </span>
                    <span >
                      {getOverallProgress()}%
                    </span>
                  </div>
                  <Progress value={getOverallProgress()} className="h-3" />
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary-foreground/70">
                      {tasks.filter((t) => t.status === "not-started").length}
                    </div>
                    <div className="text-sm text-secondary-foreground">
                      Not Started
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">
                      {tasks.filter((t) => t.status === "in-progress").length}
                    </div>
                    <div className="text-sm text-secondary-foreground">
                      In Progress
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-green">
                      {tasks.filter((t) => t.status === "completed").length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10 w-full">
          {tasks.map((task) => {
            const taskNotes = getTaskNotes(task.id);

            return (
              <Card key={task.id} className="bg-primary relative border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg dark:text-gray-100">
                        {task.title}
                      </CardTitle>
                    </div>
                    <p
                      className={`${getStatusColor(
                        task.status
                      )} text-white px-3 rounded-full py-0.5 border-none`}
                    >
                      {task.status.replace("-", " ")}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span >Progress</span>
                      <span>
                        {getProgressPercentage(task.status)}%
                      </span>
                    </div>
                    <Progress
                      value={getProgressPercentage(task.status)}
                      className="h-2"
                    />
                  </div>
                  <div className="text-sm min-h-[20px] flex flex-col space-y-1 pb-6">
                    <p>Description</p>
                    {task.description.length >= 1 ? (<p>{task.description}</p>) : (<p className="text-sm">No description..</p>)}
                  </div>

                  {/* Added Notes */}
                  {taskNotes.length > 0 && (
                    <div className="space-y-2 pb-8">
                      <h4 className="text-sm font-medium flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        Progress Notes
                      </h4>
                      {taskNotes.map((note: any) => (
                        <div
                          key={note.id}
                          className="bg-secondary p-2 border border-border rounded-md"
                        >
                          <div className="font-medium capitalize flex items-center justify-between">
                            <span className="text-[16px]">{note.type}</span>
                            <div className="flex gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleEditNote(note)}
                                className="h-4 w-4 p-0 hover:bg-white/20"
                              >
                                <Edit className="h-2 w-2" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => onDeleteProgressNote(note.id)}
                                className="h-4 w-4 p-0 hover:bg-white/20"
                              >
                                <Trash2 className="h-2 w-2" />
                              </Button>
                            </div>
                          </div>
                          {editingNoteId === note.id ? (
                            <div className="mt-2 w-full space-y-2">
                              <textarea
                                value={editingNoteText}
                                onChange={(e) =>
                                  setEditingNoteText(e.target.value)
                                }
                                className="min-h-[40px] border border-border bg-white text-secondary-foreground/50 p-2 w-full text-sm"
                              />
                              <div className="flex gap-1">
                                <Button
                                  variant="default"
                                  size="default"
                                  onClick={saveEditedNote}
                                  className=""
                                >
                                  Save
                                </Button>
                                <Button
                                  size="default"
                                  variant="outline"
                                  onClick={cancelEditNote}
                                  className=""
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          )  : (
                            <>
                              <div>{note.note}</div>
                              <div className="text-xs text-secondary-foreground mt-1">
                                {note.date.toLocaleDateString()}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Note Button */}
                  {selectedTaskId === task.id ? (
                    <div className="space-y-2 border-t border-border pt-3">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={
                            noteType === "success" ? "default" : "outline"
                          }
                          onClick={() => setNoteType("success")}
                          className="text-xs"
                        >
                          Success
                        </Button>
                        <Button
                          size="sm"
                          variant={noteType === "issue" ? "danger" : "outline"}
                          onClick={() => setNoteType("issue")}
                          className="text-xs"
                        >
                          Issue
                        </Button>
                        <Button
                          size="sm"
                          variant={
                            noteType === "observation" ? "default" : "outline"
                          }
                          onClick={() => setNoteType("observation")}
                          className="text-xs"
                        >
                          Note
                        </Button>
                      </div>
                      <textarea
                        placeholder="Add your progress note..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        className="min-h-[60px] text-sm border border-border/70 p-2 w-full outline-2 outline-border"
                      />
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="default"
                          onClick={addProgressNote}
                          className="bg-green text-white"
                        >
                          Add Note
                        </Button>
                        <Button
                          size="default"
                          variant="outline"
                          onClick={() => setSelectedTaskId(null)}
                          className=" bg-red-400 text-white tracking-wider"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute bottom-4 ">

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedTaskId(task.id)}
                      className="w-full text-xs"
                    >
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Add Progress Note
                    </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressContent;
