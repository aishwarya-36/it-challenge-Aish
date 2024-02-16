import React from "react";
import { useState } from "react";

import Button from "@mui/material/Button";
const FilterButton = ({ value }) => {
  const [buttonState, setButtonState] = useState(true);
  const handleClick = () => {
    setButtonState(!buttonState);
  };
  return (
    <Button
      sx={{
        mr: 2,
        minWidth: 0,
        color: buttonState ? "#4e39f9" : "white",
        background: buttonState ? "white" : "#4e39f9",
      }}
      variant={buttonState ? "text" : "contained"}
      onClick={handleClick}
    >
      {value}
    </Button>
  );
};

export default FilterButton;
