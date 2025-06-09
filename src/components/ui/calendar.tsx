import * as React from "react";
import { DayPicker } from "react-day-picker";
import { enGB } from "date-fns/locale";
import "react-day-picker/style.css";
import { cn } from "../lib/utils";
import { buttonVariants } from "@/components/ui/button";

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
      className={cn("p-3 pointer-events-auto", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-md md:text-lg font-medium",
        nav: "space-x-1 flex items-center justify-start",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute left-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-pink-400 rounded-md w-9 font-normal text-[14px]",
        row: "flex w-full mt-2",
        cell: "relative h-9 w-9 text-center text-sm p-0 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 md:h-14 w-9 md:w-14 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-link hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-green",
        day_outside:
          "day-outside text-link opacity-50 aria-selected:bg-accent/50 aria-selected:text-link aria-selected:opacity-30",
        day_disabled: "text-link opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={components}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
