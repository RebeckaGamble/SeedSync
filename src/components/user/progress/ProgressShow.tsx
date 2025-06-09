import { useTasks } from "@/hooks/use-tasks";
import ProgressContent from "./ProgressContent";
import { useProgressNotes } from "@/hooks/use-progress-notes";

const ProgressShow = () => {
  const { tasks } = useTasks();
  const {
    addProgressNote,
    updateProgressNote,
    deleteProgressNote,
    getTaskNotes,
  } = useProgressNotes();

  return (
    <div className="w-full max-w-[90rem] px-4 2xl:px-0 mx-auto py-10 md:py-16">
      <ProgressContent
        tasks={tasks}
        onAddProgressNote={addProgressNote}
        onUpdateProgressNote={updateProgressNote}
        onDeleteProgressNote={deleteProgressNote}
        getTaskNotes={getTaskNotes}
      />
    </div>
  );
};

export default ProgressShow;
