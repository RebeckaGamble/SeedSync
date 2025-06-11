import { Progress } from "@/components/ui/progress";
import { getProgressPercentage } from "@/hooks/use-progress-notes";
import type { ITask } from "@/types/task-types";
import { useTranslation } from "react-i18next";

interface IProgressTopbar {
  tasks: ITask[];
}

const ProgressTopBar = ({ tasks }: IProgressTopbar) => {
  const { t } = useTranslation();

  const getOverallProgress = () => {
    if (tasks.length === 0) return 0;
    const totalProgress = tasks.reduce(
      (sum, task) => sum + getProgressPercentage(task.status),
      0
    );
    return Math.round(totalProgress / tasks.length);
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex text-secondary-foreground justify-between text-sm mb-2">
          <span>{t("progress.subText")}</span>
          <span>{getOverallProgress()}%</span>
        </div>
        <Progress value={getOverallProgress()} className="h-3" />
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-secondary-foreground/70">
            {tasks.filter((t) => t.status === "notStarted").length}
          </div>
          <div className="text-sm text-secondary-foreground">
            {t("progress.notStarted")}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-yellow-600">
            {tasks.filter((t) => t.status === "inProgress").length}
          </div>
          <div className="text-sm text-secondary-foreground">
            {t("progress.inProgress")}
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold text-green">
            {tasks.filter((t) => t.status === "completed").length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("progress.completed")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTopBar;
