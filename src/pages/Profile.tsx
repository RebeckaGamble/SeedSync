import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams<{ id: string}>();
  const { user } = useUserAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  // if (id && user.uid !== id) {
  //   navigate(`/profile/${user.uid}`);
  //   return null;
  // }

  // if (!user) return <div className="pt-[60px]">Loading...</div>;

  // Optional safety check
  if (user.uid !== id) {
    return <div className="pt-[60px]">Access denied: You can only view your own profile</div>;
  }


  return (
    <div className="pt-[60px]">
      <h1>Profile page {id}</h1>
      <div>
        <h1>{user?.displayName || "Profile"}</h1>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
