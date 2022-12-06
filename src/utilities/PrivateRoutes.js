import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const userLoggedin = useSelector((state) => state.user.logged);
  console.log("Routing ?", userLoggedin);

  return userLoggedin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
