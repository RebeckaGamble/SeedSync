import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import CreateTaskForm from "./CreateTaskForm";
import { Button } from "../ui/button";
import type { ITask, TaskCategory, TaskStatus } from "@/types/task-types";

interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddTask: (task: Omit<ITask, "id">) => void;
  onUpdateTask: (task: ITask) => void;
  editingTask: ITask | null;
  selectedMonth: string;
  months: string[];
  onCancel?: () => void;
  //   onSubmit: () => void;
  isSubmitDisabled?: boolean;
  isEditing?: boolean;
}


const AddTaskDialog = ({
  open,
  onOpenChange,
  onAddTask,
  onUpdateTask,
  editingTask,
  selectedMonth,
  months,
  onCancel,
  //   onSubmit,
  isSubmitDisabled,
  isEditing,
}: AddTaskDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [category, setCategory] = useState<TaskCategory>("sowing");
  const [status, setStatus] = useState<TaskStatus>("not-started");
  const [month, setMonth] = useState(selectedMonth);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
      setCategory(editingTask.category);
      setStatus(editingTask.status);
      setMonth(editingTask.month);
    } else {
      setTitle("");
      setDescription("");
      setDueDate(new Date());
      setCategory("sowing");
      setStatus("not-started");
      setMonth(selectedMonth);
    }
  }, [editingTask, selectedMonth, open]);

  const handleSubmit = () => {
    const task = {
      title,
      description,
      dueDate,
      category,
      status,
      month,
    };
    
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");


    if (editingTask) {
      const updateTasks = storedTasks.map((t: ITask) => t.id === editingTask.id ? { ...task, id: editingTask.id} : t)
      localStorage.setItem("takss", JSON.stringify(updateTasks))
      onUpdateTask({ ...task, id: editingTask.id });
    } else {
      const newTask = { ...task, id: crypto.randomUUID() }
      const updatedTasks = [...storedTasks, newTask]
      localStorage.setItem("tasks", JSON.stringify(updatedTasks))
      onAddTask(newTask);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setCategory("sowing");
    setStatus("not-started");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="backdrop-blur-xs" />

      <DialogContent className="fixed border border-border top-1/2 sm:top-1/3 left-1/2 w-[98%] sm:w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 text-primary-foreground bg-primary py-6 px-4 rounded-lg shadow-lg">
        <DialogDescription className="text-xl">{editingTask ? "Edit Task" : "Add New Task"}</DialogDescription>
        <DialogTitle className="sr-only">Add task</DialogTitle>

        <CreateTaskForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          dueDate={dueDate}
          setDueDate={setDueDate}
          category={category}
          setCategory={setCategory}
          status={status}
          setStatus={setStatus}
          month={month}
          setMonth={setMonth}
          months={months}
        />
        {/* Cancel, Edit/Save btns */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button
          variant="edit"
          size="default"
            onClick={onCancel}
            className="text-primary-foreground"
          >
            Cancel
          </Button>
          <Button
            variant="default"
            size="default"
            onClick={handleSubmit}
            className="bg-green hover:bg-green-hover"
            disabled={isSubmitDisabled}
          >
            {isEditing ? "Update Task" : "Add Task"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;
