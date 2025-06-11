import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ITask } from "@/types/task-types";

interface ICalendarListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tasks: ITask[];
  onTaskClick: (task: ITask) => void;
  date?: Date;
}

const CalendarListDialog = ({
  open,
  onOpenChange,
  tasks,
  onTaskClick,
  date,
}: ICalendarListProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="backdrop-blur-xs" />
      <DialogContent className="fixed border border-border top-1/2  left-1/2 w-[98%] sm:w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 text-primary-foreground bg-primary py-6 px-4 rounded-lg shadow-lg">
        <DialogTitle className="text-xl text-center font-bold">
          Tasks for {date?.toDateString()}{" "}
        </DialogTitle>
        <DialogDescription className="text-sm text-center mt-4 mb-6 sr-only">
          See and edit tasks for selected date
        </DialogDescription>

        {tasks.length === 0 ? (
          <p className="text-sm italic text-muted-foreground">
            No tasks for this day.
          </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between items-center">
                <span className="text-sm">{task.title}</span>
                <Button
                  size="default"
                  onClick={() => onTaskClick(task)}
                  variant="outline"
                >
                  Edit
                </Button>
              </li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CalendarListDialog;
