import { useUserAuth } from "@/context/UserAuthContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUserAuth();

  if (user === undefined) {
    return <div className="pt-[60px]">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-[60px] min-h-[calc(100vh-168px)] flex flex-col">
      <div className="bg-primary text-primary-foreground">
        <div className="py-10 md:py-16 w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
          <h1>{user?.displayName || "Profile"}</h1>
          <p>Email: {user?.email}</p>
        </div>
      </div>
      <div className="bg-secondary flex-1 text-secondary-foreground">
        <div className="py-10 md:py-16 w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
          calendar going here
        </div>
      </div>
    </div>
  );
};

export default Profile;
