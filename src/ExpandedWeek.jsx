import React from "react";

import { DayRow } from "./DayRow";
const ExpandedWeek = ({ isWeekHidden }) => {
  return (
    <div className={`${isWeekHidden ? "hidden" : ""}`}>
      <DayRow id={"Mon"} />
      <DayRow id={"Tue"} />
      <DayRow id={"Wed"} />
      <DayRow id={"Thu"} />
      <DayRow id={"Fri"} />
      <DayRow id={"Sat"} />
      <DayRow id={"Sun"} />
    </div>
  );
};

export default ExpandedWeek;
