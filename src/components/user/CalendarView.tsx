import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { CalendarDayCell } from "./CalendarDayCell";
import type { ITask } from "@/types/task-types";
import type { DayProps } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarViewProps {
  currentDate: Date;
  selectedDate: Date | undefined;
  onDayClick: (date: Date | undefined) => void;
  tasks: ITask[];
  onTaskClick: (task: ITask) => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

const CalendarView = ({
  currentDate,
  selectedDate,
  onDayClick,
  tasks,
  onTaskClick,
  onPreviousMonth,
  onNextMonth,
}: CalendarViewProps) => {
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

  const CustomDayCell = (props: { date: Date }) => {
    const { date } = props;

    const tasksForDay = getTasksForDate(date);

    return (
      <CalendarDayCell
        date={date}
        tasks={tasksForDay}
        onTaskClick={onTaskClick}
      />
    );
  };

  // const CustomDayCell = ({
  //   day,
  //   modifiers,
  //   ...props
  // }: {
  //   day: CalendarDay;
  //   modifiers: Modifiers;
  // }) => {
  //   const date = day.date;
  //   const tasksForDay = getTasksForDate(date);
  //   return (
  //     <CalendarDayCell
  //       date={date}
  //       tasks={tasksForDay}
  //       onTaskClick={onTaskClick}
  //       {...props}
  //     />
  //   );
  // };

  const taskDates = new Set(
    tasks.map((task) => new Date(task.dueDate).toDateString())
  );

  return (
    <div>
      <div className="flex flex-col items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          Calendar{" "}
        </h2>

        <Calendar
          // animate
          // hideNavigation
          // captionLayout="dropdown"
          mode="single"
          selected={selectedDate}
          onSelect={onDayClick}
          className="w-full"
          month={currentDate}
          onMonthChange={(newDate) => {
            if (newDate > currentDate) {
              onNextMonth();
            } else if (newDate < currentDate) {
              onPreviousMonth();
            }
          }}
          modifiersClassNames={{
            hasTasks: "border border-green bg-green-50 text-green",
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
            months:
              "w-full flex flex-col bg-yellow-200 justify-center items-center sm:space-x-4 py-10 ",
            caption:
              "relative flex bg-blue-400 justify-between px-4 items-center",
            caption_label:
              "absolute left-1/2 -translate-x-1/2 top-14 bg-blue-500 text-base md:text-lg font-medium",
            day: "border-[0.5px] border-border h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 xl:h-24 xl:w-24 p-0 font-normal bg-primary text-center aria-selected:opacity-100",
            day_button: "",
            weekday: "bg-primary py-2 border-[0.5px] border-border",
            // weekday: "px-10 w-full  justify-between",
            weeks: "bg-border",
            month: "space-y-4",
            // nav: "space-x-1 flex items-center justify-start",
            nav: "flex items-center gap-2 bg-red-500 justify-between",
            nav_button_previous: " w-6 h-6",
            nav_button_next: "w-6 h-6",
            table: "w-full  ",
            head_row: "flex",
            head_cell: "text-pink-400 rounded-md w-9 font-normal text-[14px]",
            row: "flex w-full mt-2",
            cell: "relative h-9 w-9 text-center text-sm p-0 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",

            day_range_end: "day-range-end",
            day_selected:
              "bg-primary text-link hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: " text-green",
            day_outside:
              "day-outside text-link opacity-50 aria-selected:bg-accent/50 aria-selected:text-link aria-selected:opacity-30",
            day_disabled: "text-link opacity-50",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
          components={{
            // Day: CustomDayCell,

            Chevron: (props) =>
              props.orientation === "left" ? (
                <ChevronLeftIcon {...props} />
              ) : (
                <ChevronRightIcon {...props} />
              ),
          }}
        />
      </div>
    </div>
  );
};

export default CalendarView;
