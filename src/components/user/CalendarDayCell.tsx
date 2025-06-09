import { useIsMobile } from "@/hooks/use-mobile";
import type { ITask } from "@/types/task-types";

interface CalendarDayCellProps {
  date: Date;
  tasks: ITask[];
  onTaskClick: (task: ITask) => void;
}

export const CalendarDayCell = ({
  date,
  tasks,
  onTaskClick,
}: CalendarDayCellProps) => {
  const isMobile = useIsMobile();
  const isToday = new Date().toDateString() === date.toDateString();
  const tasksToShow = isMobile ? 1 : 2;

  return (
    <div
      className={`
      relative h-full w-full cursor-pointer min-h-[50px] md:min-h-[80px]
      ${isToday ? "bg-link" : ""}
    `}
    >
      <div
        className={`
        absolute top-1 left-1 text-sm font-medium
        ${isToday ? "text-border" : "dark:text-gray-300"}
      `}
      >
        {date.getDate()}
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-1 pb-1">
        {tasks.length > 0 && (
          <div className="mt-4 space-y-0.5">
            {tasks.slice(0, tasksToShow).map((task) => (
              <div
                key={task.id}
                className={`
                  text-xs truncate rounded-sm px-1 cursor-pointer
                  ${
                    task.category === "sowing"
                      ? "bg-primary text-green"
                      : ""
                  }
                  ${
                    task.category === "watering"
                      ? "bg-blue-100 text-link dark:text-blue-100"
                      : ""
                  }
                  ${
                    task.category === "harvesting"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                      : ""
                  }
                  ${
                    task.category === "other"
                      ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                      : ""
                  }
                  ${
                    task.status === "completed" ? "opacity-60 line-through" : ""
                  }
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  onTaskClick(task);
                }}
              >
                {task.title}
              </div>
            ))}
            {tasks.length > tasksToShow && (
              <div className="text-[10px] text-center text-border bg-primary rounded-sm">
                +{tasks.length - tasksToShow} more
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDayCell;
