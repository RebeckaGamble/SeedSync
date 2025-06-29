import { Calendar } from "../../ui/calendar";
import type { ITask } from "@/types/task-types";
import "react-day-picker/style.css";
import { useTranslation } from "react-i18next";

interface CalendarViewProps {
  currentDate: Date;
  selectedDate: Date | undefined;
  onDayClick: (date: Date | undefined) => void;
  tasks: ITask[];
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

const CalendarContent = ({
  currentDate,
  selectedDate,
  onDayClick,
  tasks,
  onPreviousMonth,
  onNextMonth,
}: CalendarViewProps) => {
  const { t } = useTranslation();

  const getTasksForDate = (date: Date) => {
    return tasks.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getDate() === date.getDate() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getFullYear() === date.getFullYear()
      );
    });
  };

  return (
    <div>
      <div className="flex flex-col w-full items-start sm:items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          {t("calendar.title")}
        </h2>

        <Calendar
          animate
          mode="single"
          selected={selectedDate}
          onSelect={onDayClick}
          className="w-full "
          month={currentDate}
          onMonthChange={(newDate) => {
            if (newDate > currentDate) {
              onNextMonth();
            } else if (newDate < currentDate) {
              onPreviousMonth();
            }
          }}
          formatters={{
            formatDay: (date) => {
              const taskCount = getTasksForDate(date).length;
              return taskCount > 0
                ? `${date.getDate()}📌`
                : `${date.getDate()}`;
            },
          }}
          classNames={{
            months: "w-full flex flex-col justify-center items-center py-10 ",
            month_caption: "",
            caption_label:
              "flex w-full justify-center text-base sm:text-lg font-medium",
            day: "h-14 w-14 sm:h-14 sm:w-20 sm:h-20 md:h-24 md:w-24 lg:w-28 lg:h-28 xl:h-30 xl:w-30 p-0 font-normal bg-primary text-center aria-selected:opacity-100",
            nav: "flex mx-6 w-[200px] absolute  top-[36px] justify-between",
          }}
        />
      </div>
    </div>
  );
};

export default CalendarContent;
