import React from "react";

// Components
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Overview/Overview";
import Calendar from "../Calendar/Calendar";

const Layout = (props) => {
  return (
    <div className="h-full w-full flex flex-row justify-center items-center">
      {/* Sidebar */}
      <div className="h-full w-1/5 bg-white">
        <Sidebar />
      </div>
      {/* Overview */}
      <div className="h-full w-3/4 bg-gray-200">
        <Overview />
      </div>
      {/* Calendar */}
      <div className="h-full w-1/3 bg-gray-200">
        <Calendar />
      </div>
    </div>
  );
};

export default Layout;
