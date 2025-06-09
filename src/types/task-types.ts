export type TaskCategory = "sowing" | "watering" | "harvesting" | "other";
export type TaskStatus = "not-started" | "in-progress" | "completed";

export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  category: TaskCategory;
  status: TaskStatus;
  month: string;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getCategoryColor = (category: ITask["category"]) => {
  switch (category) {
    case "sowing":
      return "bg-green-600 text-white";
    case "watering":
      return "bg-blue-600 text-white";
    case "harvesting":
      return "bg-orange-600 text-white";
    default:
      return "bg-purple-600 text-white";
  }
};
