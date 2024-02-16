import React from "react";
import { useState } from "react";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { MultiSliderDay } from "./MultiSlider";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";

export const DayRow = ({ id }) => {
  const label = { inputProps: { "aria-label": "Select Week" } };
  const [isHidden, setIsHidden] = useState(true);

  const [isDisabled, setIsDisabled] = useState(false);
  const handleAdd = () => {
    setIsHidden(!isHidden);
  };

  const handleDisabled = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <>
      <div className="m-5 items-center flex ">
        <span className="w-[50px] ml-[30px]"> {id} :</span>

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

        <MultiSliderDay isDisabled={isDisabled} isHidden={isHidden} />

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
            sx={{ ml: "50px" }}
          />
        </Tooltip>
      </div>
    </>
  );
};
