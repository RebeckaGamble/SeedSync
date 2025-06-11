import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserAuth } from "@/context/UserAuthContext";
import { useTranslation } from "react-i18next";
import CalendarShow from "@/components/user/calendar/CalendarShow";
import ProgressShow from "@/components/user/progress/ProgressShow";
import TaskBoardShow from "@/components/user/taskboard/TaskBoardShow";

import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUserAuth();
  const { t } = useTranslation();

  if (user === undefined) {
    return <div className="pt-[60px]">{t("profile.loading")}</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-[60px] bg-primary text-primary-foreground flex flex-col min-h-[calc(100vh-170px)]">
      <div className=" ">
        {/* Profile header */}
        <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
          <div className="relative py-10 sm:py-16">
            <div className="text-center flex flex-col ">
              <h1 className="text-3xl font-bold md:text-4xl mb-6">
                {user?.displayName || t("profile.title")}
              </h1>
              <p>{t("profile.text")}</p>
            </div>
            <div className="absolute top-0 right-0">
              <p className="font-semibold text-secondary-foreground">
                {t("profile.user")}{" "}
                <span className="font-normal italic">{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
        {/* Toggle between Schedule, Tasktable, Progress */}
        <Tabs defaultValue="tasktable" className="text-secondary-foreground">
          <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
            <TabsList className="w-full grid grid-cols-3 bg-secondary mb-6 py-2 sm:py-4 h-auto gap-10 rounded-full px-4 sm:px-6 lg:px-10 shadow-lg">
              <TabsTrigger value="schedule" className="text-[16px] tracking-wider">
                {t("calendar.title")}
              </TabsTrigger>
              <TabsTrigger value="tasktable" className="text-[16px] tracking-wider">{t("taskboard.title")}</TabsTrigger>
              <TabsTrigger value="progress" className="text-[16px] tracking-wider">{t("progress.title")}</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="schedule" className="w-full">
            <div className="bg-secondary">
              <CalendarShow />
            </div>
          </TabsContent>
          <TabsContent value="tasktable" className="w-full">
            <div className="bg-secondary">
              <TaskBoardShow />
            </div>
          </TabsContent>
          <TabsContent value="progress" className="w-full">
            <div className="bg-secondary">
              <ProgressShow />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
