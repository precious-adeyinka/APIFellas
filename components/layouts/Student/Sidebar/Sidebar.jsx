import React from "react";

const Sidebar = (props) => {
  return (
    <div className="h-full w-full flex flex-col justify-between items-between p-3">
      {/* Top */}
      <div className="h-auto w-full rounded-sm bg-transparent flex flex-col justify-center items-center space-y-16">
        {/* Hamburger */}
        <div className="h-10 w-full bg-gray-200 rounded-sm"></div>

        {/* Tabs */}
        <div className="h-32 w-full rounded-sm bg-transparent flex flex-col justify-center items-center space-y-3">
          <div className="h-10 w-full bg-gray-200 rounded-sm"></div>
          <div className="h-10 w-full bg-gray-200 rounded-sm"></div>
          <div className="h-10 w-full bg-gray-200 rounded-sm"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="h-32 w-full rounded-sm bg-transparent flex flex-col justify-center items-center space-y-3">
        {/* Settings */}
        <div className="h-10 w-full bg-gray-200 rounded-sm"></div>
        <div className="h-10 w-full bg-gray-200 rounded-sm"></div>
        <div className="h-10 w-full bg-gray-200 rounded-sm"></div>
      </div>
    </div>
  );
};

export default Sidebar;
