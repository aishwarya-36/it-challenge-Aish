import React from "react";
import { useState } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { MultiSliderWeek } from "./MultiSlider";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ExpandedWeek from "./ExpandedWeek";

export const WeekRow = ({ id }) => {
  const label = { inputProps: { "aria-label": "Select Week" } };
  const [isHidden, setIsHidden] = useState(true);
  const [isWeekHidden, setIsWeekHidden] = useState(true);

  const [isDisabled, setIsDisabled] = useState(false);
  const handleAdd = () => {
    setIsHidden(!isHidden);
  };
  const handleShowWeek = () => {
    setIsWeekHidden(!isWeekHidden);
  };
  const handleDisabled = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <div className="m-5 p-5 border shadow-md ">
      <div className=" p-5 items-center flex ">
        <span className="w-[70px]">Week {id} :</span>

        <Checkbox
          {...label}
          defaultChecked
          onClick={handleDisabled}
          sx={{
            [`&, &.${checkboxClasses.checked}`]: {
              color: "#4e39f9",
              mr: "5%",
            },
          }}
        />
        <MultiSliderWeek isDisabled={isDisabled} isHidden={isHidden} />

        <Tooltip
          TransitionComponent={Zoom}
          title="Add/Remove another range"
          placement="top"
        >
          <Checkbox
            {...label}
            onChange={handleAdd}
            checkedIcon={<RemoveCircleOutlineIcon sx={{ color: "#717171" }} />}
            icon={<DataSaverOnIcon sx={{ color: "#717171" }} />}
            disabled={isDisabled}
            sx={{ ml: "40px" }}
          />
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Expand Week" placement="top">
          <Checkbox
            {...label}
            onChange={handleShowWeek}
            checkedIcon={
              <KeyboardDoubleArrowUpIcon sx={{ color: "#717171" }} />
            }
            icon={<KeyboardDoubleArrowDownIcon sx={{ color: "#717171" }} />}
            disabled={isDisabled}
            sx={{ ml: "10px" }}
          />
        </Tooltip>
      </div>
      <ExpandedWeek isWeekHidden={isWeekHidden} />
    </div>
  );
};
