import { Button } from "@/components/ui/button";
import type { ITask } from "@/types/task-types";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

interface IProgressAddNoteProps {
  task: ITask;
  selectedTaskId: string | null;
  setSelectedTaskId: (taskId: string | null) => void;
  noteType: "success" | "issue" | "observation";
  setNoteType: (type: "success" | "issue" | "observation") => void;
  newNote: string;
  setNewNote: (note: string) => void;
  addProgressNote: () => void;
}

const ProgressAddNote = ({
  task,
  selectedTaskId,
  setSelectedTaskId,
  noteType,
  setNoteType,
  newNote,
  setNewNote,
  addProgressNote,
}: IProgressAddNoteProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {selectedTaskId === task.id ? (
        <div className="space-y-2 border-t border-border pt-3">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={noteType === "success" ? "default" : "outline"}
              onClick={() => setNoteType("success")}
              className="text-xs"
            >
              {t("progress.success")}
            </Button>
            <Button
              size="sm"
              variant={noteType === "issue" ? "danger" : "outline"}
              onClick={() => setNoteType("issue")}
              className="text-xs"
            >
              {t("progress.issue")}
            </Button>
            <Button
              size="sm"
              variant={noteType === "observation" ? "default" : "outline"}
              onClick={() => setNoteType("observation")}
              className="text-xs"
            >
              {t("progress.note")}
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
              {t("progress.addBtn")}
            </Button>
            <Button
              size="default"
              variant="outline"
              onClick={() => setSelectedTaskId(null)}
              className=" bg-red-400 text-white tracking-wider"
            >
              {t("progress.cancelBtn")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSelectedTaskId(task.id)}
            className="w-full text-xs"
          >
            <MessageSquare className="h-3 w-3 mr-1" />
            {t("progress.addBtnText")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProgressAddNote;
