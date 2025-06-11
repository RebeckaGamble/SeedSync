import { Button } from "../../ui/button";
import { cn } from "../../lib/utils";
import { Calendar } from "../../ui/calendar";
import { Input } from "../../ui/input";
import { format } from "date-fns";
import { Label } from "../../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { CalendarIcon } from "lucide-react";
import type { TaskCategory, TaskStatus } from "@/types/task-types";
import { useTranslation } from "react-i18next";

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
}

//     taskStatusForm: {
//       notStarted: "Inte påbörjade",
//       inProgress: "Påbörjade",
//       completed: "Färdiga",
//     },

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
}: ITaskFormProps) => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-1">
        <Label htmlFor="title">{t("taskboard.taskTitleForm")}</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("taskboard.taskTitlePlaceholder")}
        />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="description" className="text-sm font-medium">
          {t("taskboard.taskDescriptionForm")}{" "}
        </Label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t("taskboard.taskDescriptionPlaceholder")}
          className={cn(
            "file:text-slate-400 placeholder:text-slate-500 selection:bg-white selection:text-primary-foreground dark:bg-primary/80 border-border flex h-14 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-1">
          <Label htmlFor="date" className="text-sm font-medium">
            {t("taskboard.taskDueDate")}{" "}
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
            {t("taskboard.taskCategoryForm")}{" "}
          </Label>
          <Select
            value={category}
            onValueChange={(val) => setCategory(val as TaskCategory)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-primary ">
              <SelectItem value="sowing"> {t("taskboard.sowing")} </SelectItem>
              <SelectItem value="watering">
                {t("taskboard.watering")}
              </SelectItem>
              <SelectItem value="harvesting">
                {t("taskboard.harvesting")}
              </SelectItem>
              <SelectItem value="other"> {t("taskboard.other")} </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-1">
        <Label htmlFor="status" className="text-sm font-medium">
          {t("taskboard.taskStatusForm")}
        </Label>
        <Select
          value={status}
          onValueChange={(val) => setStatus(val as TaskStatus)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent className="bg-primary">
            <SelectItem value="notStarted">
              {" "}
              {t("taskboard.notStarted")}
            </SelectItem>
            <SelectItem value="inProgress">
              {" "}
              {t("taskboard.inProgress")}
            </SelectItem>
            <SelectItem value="completed">
              {" "}
              {t("taskboard.completed")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CreateTaskForm;
