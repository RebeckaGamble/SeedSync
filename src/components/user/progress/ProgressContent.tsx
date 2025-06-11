import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ITask } from "@/types/task-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { IProgressNote } from "@/hooks/use-progress-notes";
import {
  getStatusColor,
  getProgressPercentage,
} from "@/hooks/use-progress-notes";
import ProgressAddNote from "./ProgressAddNote";
import AddedNote from "./AddedNote";
import ProgressTopBar from "./ProgressTopBar";
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
  getTaskNotes: (taskId: string) => IProgressNote[];
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
  const [statusFilter, setStatusFilter] = useState<
    "all" | "notStarted" | "inProgress" | "completed"
  >("all");

  const addProgressNote = () => {
    if (!newNote.trim() || !selectedTaskId) return;

    onAddProgressNote(selectedTaskId, newNote, noteType);
    setNewNote("");
    setSelectedTaskId(null);
  };

  const handleEditNote = (note: IProgressNote) => {
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

  // Sort cards showing not started first
  const statusOrder = {
    notStarted: 0,
    inProgress: 1,
    completed: 2,
  };

  const sortedTasks = [...tasks].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status]
  );

  const filteredTasks = sortedTasks.filter(
    (task) =>
      statusFilter === "all" ||
      task.status ===
        (statusFilter === "notStarted"
          ? "not-started"
          : statusFilter === "inProgress"
          ? "in-progress"
          : statusFilter)
  );

  return (
    <div>
      <div className="flex flex-col items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          {t("progress.title")}
        </h2>
        <div className="w-full">
          <Card className="border-border shadow-md">
            <CardHeader>
              <CardTitle>{t("progress.subTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Progressbar */}
              <ProgressTopBar tasks={tasks} />
            </CardContent>
          </Card>
        </div>
        {/* Filter cards */}
        <div className="flex flex-col pt-5">
          <p className="text-center font-semibold text-[16px] pb-4">
            Filter progress{" "}
          </p>
          <div className="flex gap-2">
            {["all", "notStarted", "inProgress", "completed"].map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter(status as any)}
                className="capitalize"
              >
                {t(`progress.filterCards.${status}`)}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 w-full">
          {filteredTasks.map((task) => {
            const taskNotes = getTaskNotes(task.id);

            return (
              <Card key={task.id} className="bg-primary relative border-border">
                <CardHeader className="pb-3 px-4 2xl:px-6">
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
                      {t(`progress.filterCards.${task.status}`)}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-4 2xl:px-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span> {t("progress.title")}</span>
                      <span>{getProgressPercentage(task.status)}%</span>
                    </div>
                    <Progress
                      value={getProgressPercentage(task.status)}
                      className="h-2"
                    />
                  </div>
                  <div className="text-sm min-h-[20px] flex flex-col space-y-1 pb-6">
                    <p className="font-semibold text-[14px]">
                      {" "}
                      {t("progress.description")}:
                    </p>
                    {task.description.length >= 1 ? (
                      <p>{task.description}</p>
                    ) : (
                      <p className="text-sm">{t("progress.noDescription")}</p>
                    )}
                  </div>

                  {/* Added Notes */}
                  <AddedNote
                    taskNotes={taskNotes}
                    editingNoteId={editingNoteId}
                    editingNoteText={editingNoteText}
                    handleEditNote={handleEditNote}
                    setEditingNoteText={setEditingNoteText}
                    saveEditedNote={saveEditedNote}
                    cancelEditNote={cancelEditNote}
                    onDeleteProgressNote={onDeleteProgressNote}
                  />

                  {/* Add Note  */}
                  <ProgressAddNote
                    task={task}
                    selectedTaskId={selectedTaskId}
                    setSelectedTaskId={setSelectedTaskId}
                    noteType={noteType}
                    setNoteType={setNoteType}
                    newNote={newNote}
                    setNewNote={setNewNote}
                    addProgressNote={addProgressNote}
                  />
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
