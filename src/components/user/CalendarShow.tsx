import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { useTasks } from "@/hooks/use-tasks";
import AddTaskDialog from "./AddTaskDialog";
import CalendarView from "./CalendarView";
import { months, type ITask } from "@/types/task-types";

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

  // Handle day click to view tasks
  const handleDayClick = (date: Date | undefined) => {
    if (!date) return;

    const tasksForDay = getTasksForDate(date);

    if (tasksForDay.length === 0) {
      // If no tasks
      setSelectedDate(date);
      setIsAddTaskOpen(true);
    } else if (tasksForDay.length === 1) {
      // If one task, open it
      setSelectedTask(tasksForDay[0]);
      setIsViewTaskOpen(true);
    } else {
      // If multiple tasks
      setSelectedDate(date);
      setSelectedTask(null);
      setIsViewTaskOpen(true);
    }
  };

  const onAddTask = (task: Omit<ITask, "id">) => {
    handleAddTask(task);
    setIsAddTaskOpen(false);
  };

  const onUpdateTask = (updatedTask: ITask) => {
    handleUpdateTask(updatedTask);
    setSelectedTask(null);
    setIsViewTaskOpen(false);
  };

  // const handleTaskClick = (task: ITask) => {
  //   setSelectedTask(task);
  //   setIsViewTaskOpen(true);
  // };

  const handleOpenAddTask = () => {
    setSelectedDate(new Date());
    setIsAddTaskOpen(true);
  };

  return (
    <div className="relative">
      <CalendarView
        currentDate={currentDate}
        selectedDate={selectedDate}
        tasks={tasks}
        onDayClick={handleDayClick}
        onTaskClick={setSelectedTask}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
      />

      <div className="mb-6">
        <button onClick={handleOpenAddTask}>Add task</button>
      </div>

      <AddTaskDialog
        open={isAddTaskOpen}
        onOpenChange={setIsAddTaskOpen}
        onAddTask={onAddTask}
        onUpdateTask={onUpdateTask}
        editingTask={null}
        selectedMonth={
          selectedDate
            ? months[selectedDate.getMonth()]
            : months[new Date().getMonth()]
        }
        months={months}
      />
    </div>
  );
};

export default CalendarShow;
