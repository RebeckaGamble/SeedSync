import { useTasks } from "@/hooks/use-tasks";
import TaskBoardContent from "./TaskBoardContent";
import { useState } from "react";
import type { ITask } from "@/types/task-types";
import AddTaskDialog from "../AddTaskDialog";

const TaskBoardShow = () => {
  const {
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
  } = useTasks();

  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [editingTask, setEditingTask] = useState<ITask | null>(null);

  const openAddTaskDialog = (month: string) => {
    setSelectedMonth(month);
    setEditingTask(null);
    setIsAddTaskOpen(true);
  };

  const openEditTaskDialog = (task: ITask) => {
    setEditingTask(task);
    setSelectedMonth(task.month);
    setIsAddTaskOpen(true);
  };

  const onAddTask = (task: Omit<ITask, "id">) => {
    handleAddTask(task);
    setIsAddTaskOpen(false);
  };

  const onUpdateTask = (updatedTask: ITask) => {
    handleUpdateTask(updatedTask);
    setEditingTask(null);
    setIsAddTaskOpen(false);
  };

  const displayedMonths = getDisplayedMonths();

  return (
    <div className="w-full max-w-[90rem] px-4 2xl:px-0 mx-auto py-10 md:py-16">
      <TaskBoardContent
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        currentMonthIndex={currentMonthIndex}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
        months={months}
        displayedMonths={displayedMonths}
        tasks={tasks}
        onAddTask={openAddTaskDialog}
        onEditTask={openEditTaskDialog}
        onDeleteTask={handleDeleteTask}
        onToggleStatus={handleToggleStatus}
      />
      <AddTaskDialog
        open={isAddTaskOpen}
        onOpenChange={setIsAddTaskOpen}
        onAddTask={onAddTask}
        onUpdateTask={onUpdateTask}
        editingTask={editingTask}
        selectedMonth={selectedMonth || months[new Date().getMonth()]}
        months={months}
      />
    </div>
  );
};

export default TaskBoardShow;
