import { useNavigate, useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();
  return (
    <div className="pt-[60px]">
      <h3>An error occureed</h3>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Go to homepage</button>
    </div>
  );
};

export default Error;
