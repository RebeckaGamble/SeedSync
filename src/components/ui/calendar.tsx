import * as React from "react";
import { DayPicker } from "react-day-picker";
import { enGB } from "date-fns/locale";
import "react-day-picker/style.css";
import { cn } from "../lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={enGB}
      showOutsideDays={showOutsideDays}
      className={cn("pointer-events-auto", className)}
      classNames={{
        months:
          "w-full flex flex-col justify-center items-center",
        month: "space-y-4",
        day: " h-10 w-10 sm:h-14 sm:w-14 p-0 font-normal bg-primary text-center aria-selected:opacity-100",
        day_button: "",
        caption: "relative flex px-4 items-center",
        caption_label:
          "absolute left-1/2 -translate-x-1/2 top-[34px] text-base sm:text-lg font-medium",

        weekday: "bg-primary py-2 border-b-[0.5px] border-border",
        weeks:"bg-border/80 dark:bg-border/50",

        nav: "flex mx-6 w-[220px] absolute top-[30px] justify-between",
        table: "w-full",
        // nav: "space-x-1 flex items-center justify-start",
        // nav_button: cn(
        //   buttonVariants({ variant: "outline" }),
        //   "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        // ),
        nav_button_previous: "w-6 h-6",
        nav_button_next: "w-6 h-6",
        // nav_button_previous: "absolute left-1",
        // nav_button_next: "absolute left-1",
        // table: "w-full border-collapse space-y-1",
        // head_row: "flex",
        // head_cell: " rounded-md w-9 font-normal text-[14px]",
        // row: "flex w-full mt-2",
        cell: "relative h-9 w-9 text-center text-sm md:text-md p-0 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day_selected: "text-red-500",
        // day_range_end: "day-range-end",
        // day_selected:
        //   "bg-primary text-link dark:text-blue-100 hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        // day_today: "bg-accent text-green",
        // day_outside:
        //   "day-outside text-link dark:Text-blue-100 opacity-50 aria-selected:bg-accent/50 aria-selected:text-link aria-selected:opacity-30",
        // day_disabled: "text-link opacity-50",
        // day_range_middle:
        //   "aria-selected:bg-accent aria-selected:text-accent-foreground",
        // day_hidden: "invisible",
        ...classNames,
      }}
      // components={components}
      components={{
        Chevron: (props) =>
          props.orientation === "left" ? (
            <ChevronLeftIcon {...props} />
          ) : (
            <ChevronRightIcon {...props} />
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
