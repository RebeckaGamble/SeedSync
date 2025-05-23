import { Outlet } from "react-router-dom";

const TipsLayout = () => {
  return (
    <div className="min-h-[calc(100vh-168px)] bg-primary">
      <Outlet />
    </div>
  );
};

export default TipsLayout;
