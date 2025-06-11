import { Button } from "@/components/ui/button";
import { type IProgressNote } from "@/hooks/use-progress-notes";
import { Edit, MessageSquare, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface IAddedNoteProps {
  taskNotes: IProgressNote[];
  editingNoteId: string | null;
  editingNoteText: string;
  handleEditNote: (note: IProgressNote) => void;
  setEditingNoteText: (text: string) => void;
  saveEditedNote: () => void;
  cancelEditNote: () => void;
  onDeleteProgressNote: (id: string) => void;
}

export const noteTypeBorderColor = (note: string) => {
  switch (note) {
    case "success":
      return "border-green-500";
    case "issue":
      return "border-red-500";
    case "observation":
      return "border-yellow-500";
    default:
      return "border-border";
  }
};

const AddedNote = ({
  taskNotes,
  editingNoteId,
  editingNoteText,
  handleEditNote,
  setEditingNoteText,
  saveEditedNote,
  cancelEditNote,
  onDeleteProgressNote,
}: IAddedNoteProps) => {
  const { t } = useTranslation();
  return (
    <div>
      {taskNotes.length > 0 && (
        <div className="space-y-2 pb-8">
          <h4 className="text-sm font-medium flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            {t("progress.progressNotes")}
          </h4>
          {taskNotes.map((note: any) => (
            <div
              key={note.id}
              className={`bg-secondary p-2 border ${noteTypeBorderColor(
                note.type
              )} rounded-md`}
            >
              <div className="font-medium capitalize flex items-center justify-between">
                <span className="text-[16px]">
                  {t(`progress.type.${note.type}`)}
                </span>
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
                    onChange={(e) => setEditingNoteText(e.target.value)}
                    className="min-h-[40px] border border-border bg-white text-secondary-foreground/50 p-2 w-full text-sm"
                  />
                  <div className="flex gap-1">
                    <Button
                      variant="default"
                      size="default"
                      onClick={saveEditedNote}
                      className=""
                    >
                      {t("progress.editNoteSave")}
                    </Button>
                    <Button
                      size="default"
                      variant="outline"
                      onClick={cancelEditNote}
                      className=""
                    >
                      {t("progress.editNoteCancel")}
                    </Button>
                  </div>
                </div>
              ) : (
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
    </div>
  );
};

export default AddedNote;
