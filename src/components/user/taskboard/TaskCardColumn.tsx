import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { ITask } from "@/types/task-types";
import TaskCard from "./TaskCard";
import { useTranslation } from "react-i18next";

interface ITaskColumn {
  viewMode: "1" | "3";
  month: string;
  tasks: ITask[];
  onAddTask: () => void;
  onEditTask: (task: ITask) => void;
  onDeleteTask: (taskId: string) => void;
  onToggleStatus: (taskId: string) => void;
}

const TaskCardColumn = ({
  viewMode,
  month,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onToggleStatus,
}: ITaskColumn) => {
  const { t } = useTranslation();
  return (
    <div className="w-full border border-border h-full rounded-md bg-primary px-4 pt-2 pb-4 min-h-[190px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-primary-foreground">{month}</h3>
        <Button
          variant="default"
          size="sm"
          onClick={onAddTask}
          className="h-8 w-8 p-0 rounded-full"
        >
          <Plus size={16} />
        </Button>
      </div>

      <div
        className={`gap-4  ${
          viewMode === "1"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            : "flex flex-wrap justify-between"
        }`}
      >
        {tasks.length === 0 ? (
          <div className="py-6 text-start text-secondary-foreground italic text-sm">
            {t("taskboard.noTasks")}
          </div>
        ) : (
          [...tasks]
            .sort(
              (a, b) =>
                new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
            )
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => onEditTask(task)}
                onDelete={() => onDeleteTask(task.id)}
                onToggleStatus={() => onToggleStatus(task.id)}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default TaskCardColumn;
