import { Button } from "@/components/ui/button";
import { getCategoryColor, type ITask } from "@/types/task-types";
import { format } from "date-fns";
import { CircleCheck, CircleX, SquarePen } from "lucide-react";

interface ITaskCardProps {
  task: ITask;
  onEdit: () => void;
  onDelete: () => void;
  onToggleStatus: () => void;
}

const getStatusIcon = (status: ITask["status"]) => {
  switch (status) {
    case "completed":
      return <CircleCheck className="text-green" />;
    case "in-progress":
      return <CircleCheck className="text-yellow-600" />;
    default:
      return <CircleCheck className="text-border" />;
  }
};

const TaskCard = ({
  task,
  onEdit,
  onDelete,
  onToggleStatus,
}: ITaskCardProps) => {
  return (
    <div
      className={`bg-secondary rounded-md w-full  shadow-sm p-4 cursor-none
        ${
          task.status === "completed"
            ? "border-l-4 border-green"
            : "border-l-4 border-border"
        }
            ${
              task.status === "in-progress"
                ? "border-l-4 border-yellow-600 "
                : ""
            }
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <h4
          className={`font-medium ${
            task.status === "completed"
              ? "line-through text-secondary-foreground"
              : ""
          }`}
        >
          {task.title}
        </h4>
        <div className="flex space-x-1">
          <Button
            size="default"
            className="h-6 w-6 p-0 hover:text-primary-foreground"
            onClick={onToggleStatus}
          >
            {getStatusIcon(task.status)}
          </Button>
          <Button
            variant="ghost"
            size="default"
            className="h-6 w-6 p-0 "
            onClick={onEdit}
          >
            <SquarePen size={14} />
          </Button>
          <Button
            size="default"
            className="h-6 w-6 p-0 hover:text-red-400"
            onClick={onDelete}
          >
            <CircleX size={14} />
          </Button>
        </div>
      </div>
      <div className="min-h-[20px]">
        {task.description && (
          <p className="text-sm mb-2  line-clamp-2">{task.description}</p>
        )}
      </div>
      <div className="flex justify-between items-center mt-2">
        <span
          className={`text-sm rounded-full px-3 py-0.5 ${getCategoryColor(
            task.category
          )}`}
        >
          {task.category}
        </span>
        <span className="text-sm">{format(task.dueDate, "MMM d")}</span>
      </div>
    </div>
  );
};

export default TaskCard;
