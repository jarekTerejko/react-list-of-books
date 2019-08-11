import React, { createContext, useState } from "react";

export const StatisticsContext = createContext();

const StatisticsContextProvider = props => {
  const [statisticsVisible, setStatisticsVisible] = useState(false);

  const toggleStatistics = () => {
    setStatisticsVisible(!statisticsVisible);
  };

  return (
    <StatisticsContext.Provider value={{ toggleStatistics, statisticsVisible }}>
      {props.children}
    </StatisticsContext.Provider>
  );
};

export default StatisticsContextProvider;
