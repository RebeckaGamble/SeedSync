import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-[80px] w-full">
      <nav className="w-fit mx-auto max-w-[90rem] shadow-md py-2 px-8 flex items-center space-x-6 justify-center rounded-full bg-primary border border-border text-primary-foreground">
        <button onClick={() => navigate("admin")}>Admin</button>
        <button onClick={() => navigate("handleTips")}>Tips</button>
        <button onClick={() => navigate("handleFaq")}>FAQ</button>
      </nav>
    </div>
  );
};

export default AdminNav;
