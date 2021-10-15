import React from "react";

const Calendar = (props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-5 relative">
      <h1>Calendar Component!</h1>
      {/* Floating Button */}
      <div
        className="h-12 w-12 rounded-full bg-blue-500 shadow-2xl absolute bottom-10 right-5 
      text-white font-medium text-4xl flex justify-center items-center cursor-pointer hover:transform hover:rotate-90 transition duration-300"
      >
        +
      </div>
    </div>
  );
};

export default Calendar;
