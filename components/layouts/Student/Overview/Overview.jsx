import React from "react";

const Overview = (props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-5 bg-blue-500">
      <div
        className="text-2xl font-light text-white"
        style={{ textDecoration: "underline wavy #fff" }}
      >
        Welcome to
      </div>
      <h1 className="text-8xl font-medium text-white font-sans">Nroll</h1>
      <p className="text-white font-light mt-5 text-sm w-[300px] mx-auto text-center">
        Not your conventional student-mentorship platform
      </p>
    </div>
  );
};

export default Overview;
