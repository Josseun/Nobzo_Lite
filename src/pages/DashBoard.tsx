import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import DashboardNav from "../components/DashboardNav";

const DashBoard = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen flex ">
        <SideBar />
        <div className="w-full">
          <DashboardNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
