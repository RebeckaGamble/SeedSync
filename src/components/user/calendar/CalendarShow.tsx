import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { useTasks } from "@/hooks/use-tasks";
import AddTaskDialog from "../taskForm/AddTaskDialog";
import CalendarView from "./CalendarContent";
import { months, type ITask } from "@/types/task-types";
import CalendarListDialog from "./CalendarListDialog";
import { Button } from "@/components/ui/button";

const CalendarShow = () => {
  const { tasks, handleAddTask, handleUpdateTask } = useTasks();

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isViewTaskOpen, setIsViewTaskOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const handlePreviousMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  const getTasksForDate = (date: Date) => {
    return tasks.filter(
      (task) =>
        task.dueDate &&
        task.dueDate.getFullYear() === date.getFullYear() &&
        task.dueDate.getMonth() === date.getMonth() &&
        task.dueDate.getDate() === date.getDate()
    );
  };

  const handleDayClick = (date: Date | undefined) => {
    if (!date) return;
    const tasksForDay = getTasksForDate(date);
    setSelectedDate(date);

    if (tasksForDay.length === 0) {
      setIsAddTaskOpen(true);
    } else if (tasksForDay.length === 1) {
      setSelectedTask(tasksForDay[0]);
      setIsViewTaskOpen(true);
    } else {
      setSelectedTask(null);
      setIsViewTaskOpen(true);
    }
  };

  const handleTaskClick = (task: ITask) => {
    setSelectedTask(task);
    setIsViewTaskOpen(true);
  };

  const onAddTask = (task: Omit<ITask, "id">) => {
    handleAddTask(task);
    setIsAddTaskOpen(false);
  };

  const onUpdateTask = (updatedTask: ITask) => {
    handleUpdateTask(updatedTask);
    setSelectedTask(null);
    setIsAddTaskOpen(false);
  };

  const handleOpenAddTask = () => {
    setSelectedDate(new Date());
    setIsAddTaskOpen(true);
  };

  return (
    <div className="w-full max-w-[90rem] px-4 2xl:px-0 mx-auto py-10 md:py-16">
      <div className="relative">
        <CalendarView
          currentDate={currentDate}
          selectedDate={selectedDate}
          tasks={tasks}
          onDayClick={handleDayClick}
          onTaskClick={handleTaskClick}
          onPreviousMonth={handlePreviousMonth}
          onNextMonth={handleNextMonth}
        />

        <div className="absolute top-10 right-4">
          <Button variant="default" size="default" onClick={handleOpenAddTask}>Add task</Button>
        </div>
        <div className="">
          <CalendarListDialog
            open={isViewTaskOpen}
            onOpenChange={(open) => {
              setIsViewTaskOpen(open);
              if (!open) {
                setSelectedDate(undefined);
              }
            }}
            tasks={selectedDate ? getTasksForDate(selectedDate) : []}
            onTaskClick={(task) => {
              setSelectedTask(task);
              setIsViewTaskOpen(false);
              setIsAddTaskOpen(true);
            }}
            date={selectedDate}
          />
        </div>
        <AddTaskDialog
          open={isAddTaskOpen}
          onOpenChange={(open) => {
            setIsAddTaskOpen(open);
            if (!open) setSelectedTask(null);
          }}
          onAddTask={onAddTask}
          onUpdateTask={onUpdateTask}
          editingTask={selectedTask}
          selectedMonth={
            selectedDate
              ? months[selectedDate.getMonth()]
              : months[new Date().getMonth()]
          }
          months={months}
          onCancel={() => setIsAddTaskOpen(false)}
        />
      </div>
    </div>
  );
};

export default CalendarShow;
