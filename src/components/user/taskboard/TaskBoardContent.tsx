import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import TaskCardColumn from "./TaskCardColumn";
import type { ITask } from "@/types/task-types";

interface ITaskBoard {
  viewMode: "1" | "3";
  onViewModeChange: (mode: "1" | "3") => void;

  currentMonthIndex: number;
  months: string[];
  onPreviousMonth: () => void;
  onNextMonth: () => void;

  displayedMonths: string[];
  tasks: ITask[];
  onAddTask: (month: string) => void;
  onEditTask: (task: ITask) => void;
  onDeleteTask: (taskId: string) => void;
  onToggleStatus: (taskId: string) => void;
}

const TaskBoardContent = ({
  viewMode,
  onViewModeChange,
  currentMonthIndex,
  months,
  onPreviousMonth,
  onNextMonth,

  displayedMonths,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onToggleStatus,
}: ITaskBoard) => {
  const getDisplayText = () => {
    if (viewMode === "1") {
      return months[currentMonthIndex];
    } else {
      return `${months[currentMonthIndex]} - ${
        months[(currentMonthIndex + 2) % 12]
      }`;
    }
  };

  return (
    <div className="">
      {/* Taskboard header */}
      <div className="flex flex-col items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mx-auto mb-12 text-primary-foreground">
          Taskboard
        </h2>
        {/* Navigate months / Show 1 or 3 months*/}
        <div className="flex flex-row justify-between items-center w-full text-primary-foreground">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onPreviousMonth}
              className="h-8 w-8 "
            >
              <ChevronLeft size={16} />
            </Button>
            <span className="min-w-20 text-center">
              {getDisplayText()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={onNextMonth}
              className="h-8 w-8 "
            >
              <ChevronRight size={16} />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === "1" ? "default" : "ghost"}
              size="default"
              onClick={() => onViewModeChange("1")}
              className="h-7 px-2"
            >
              <Calendar size={14} className="mr-1" /> 1
            </Button>
            <Button
              variant={viewMode === "3" ? "default" : "ghost"}
              size="default"
              onClick={() => onViewModeChange("3")}
              className="h-7 px-2"
            >
              <LayoutGrid size={14} className="mr-1" /> 3
            </Button>
          </div>
        </div>
      </div>
      {/** Taskboard body/cards */}
      <div
        className={` ${
          viewMode === "3" ? "grid grid-cols-1 sm:grid-col-2 md:grid-cols-3" : ""
        } gap-2`}
      >
        {displayedMonths.map((month) => (
          <TaskCardColumn
            key={month}
            month={month}
            tasks={tasks.filter((task) => task.month === month)}
            onAddTask={() => onAddTask(month)}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            onToggleStatus={onToggleStatus}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoardContent;
