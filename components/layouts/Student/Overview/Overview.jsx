import React from "react";

// components
import Nav from "./Nav/Nav";
import StatisticsCards from "./StatisticsCards/StatisticsCards";
import Chart from "./Chart/Chart";
import Preview from "./Preview/Preview";

const Overview = (props) => {
  return (
    <div className="h-full w-full flex flex-col justify-start items-center space-y-3 py-3 px-5 bg-white border border-gray-100">
      <Nav />
      <StatisticsCards />
      <Chart />
      <Preview />
    </div>
  );
};

export default Overview;
