import { useEffect, useState } from "react";
import { months, type ITask, type TaskStatus } from "@/types/task-types";

const TASKS_STORAGE_KEY = "tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [viewMode, setViewMode] = useState<"1" | "3">("3");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );

  useEffect(() => {
    const stored = localStorage.getItem(TASKS_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const withDates = parsed.map((task: any) => ({
          ...task,
          dueDate: new Date(task.dueDate),
        }));
        setTasks(withDates);
      } catch (err) {
        console.error("Failed to parse stored tasks", err);
      }
    }
  }, []);

  const saveToStorage = (tasks: ITask[]) => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  };

  const handleAddTask = (task: Omit<ITask, "id">) => {
    const newTask: ITask = {
      ...task,
      id: crypto.randomUUID(),
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    saveToStorage(updated);
  };

  const handleUpdateTask = (updatedTask: ITask) => {
    const updated = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updated);
    saveToStorage(updated);
  };

  const handleDeleteTask = (taskId: string) => {
    const updated = tasks.filter((task) => task.id !== taskId);
    setTasks(updated);
    saveToStorage(updated);
  };

  const handleToggleStatus = (taskId: string) => {
    const updated = tasks.map((task) => {
      if (task.id === taskId) {
        const newStatus: TaskStatus =
          task.status === "notStarted"
            ? "inProgress"
            : task.status === "inProgress"
            ? "completed"
            : "notStarted";
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updated);
    saveToStorage(updated);
  };

  const handlePreviousMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const getDisplayedMonths = () => {
    if (viewMode === "1") {
      return [months[currentMonthIndex]];
    } else {
      const monthsToShow = [];
      for (let i = 0; i < 3; i++) {
        const monthIndex = (currentMonthIndex + i) % 12;
        monthsToShow.push(months[monthIndex]);
      }
      return monthsToShow;
    }
  };

  return {
    tasks,
    viewMode,
    setViewMode,
    currentMonthIndex,
    months,
    getDisplayedMonths,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
    handleToggleStatus,
    handlePreviousMonth,
    handleNextMonth,
  };
};
