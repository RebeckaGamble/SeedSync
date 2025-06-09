import { Button } from "../ui/button";
import { cn } from "../lib/utils";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { format } from "date-fns";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CalendarIcon } from "lucide-react";
import type { TaskCategory, TaskStatus } from "@/types/task-types";

interface ITaskFormProps {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  dueDate: Date;
  setDueDate: (date: Date) => void;
  category: TaskCategory;
  setCategory: (category: TaskCategory) => void;
  status: TaskStatus;
  setStatus: (status: TaskStatus) => void;
  month: string;
  setMonth: (month: string) => void;
  months: string[];
}

const CreateTaskForm = ({
  title,
  setTitle,
  description,
  setDescription,
  dueDate,
  setDueDate,
  category,
  setCategory,
  status,
  setStatus,
  month,
  setMonth,
  months,
}: ITaskFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-1">
        <Label htmlFor="title">Task title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className=""
        />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="description" className="text-sm font-medium">
          Description / Notes
        </Label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add any details or notes"
          className={cn(
            "file:text-slate-400 placeholder:text-slate-500 selection:bg-white selection:text-primary-foreground dark:bg-primary/80 border-border flex h-14 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          )}
        />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="month" className="text-sm font-medium">
          Month
        </Label>
        <Select value={month} onValueChange={setMonth}>
          <SelectTrigger className=" border-border ">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent className="bg-primary ">
            {months.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-1">
          <Label htmlFor="date" className="text-sm font-medium">
            Due Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal p-2",
                  !dueDate && "text-link"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dueDate ? format(dueDate, "MMM d, yyyy") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-primary" align="start">
              <Calendar
                mode="single"
                selected={dueDate}
                onSelect={(date) => date && setDueDate(date)}
                className="p-3 pointer-events-auto "
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-1">
          <Label htmlFor="category" className="text-sm font-medium ">
            Category
          </Label>
          <Select
            value={category}
            onValueChange={(val) => setCategory(val as TaskCategory)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-primary ">
              <SelectItem value="sowing">Sowing</SelectItem>
              <SelectItem value="watering">Watering</SelectItem>
              <SelectItem value="harvesting">Harvesting</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-1">
        <Label htmlFor="status" className="text-sm font-medium">
          Status
        </Label>
        <Select
          value={status}
          onValueChange={(val) => setStatus(val as TaskStatus)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent className="bg-primary">
            <SelectItem value="not-started">Not Started</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CreateTaskForm;
