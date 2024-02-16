import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const WeekSelect = () => {
  const [week, setWeek] = React.useState(3);

  const handleChange = (event) => {
    setWeek(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ minWidth: 100 }} size="small">
        <InputLabel id="demo-simple-select-label">Select Week</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={week}
          label="Select Week"
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value={3}>Week 3</MenuItem>
          <MenuItem value={4}>Week 4</MenuItem>
          <MenuItem value={5}>Week 5</MenuItem>
          <MenuItem value={6}>Week 6</MenuItem>
          <MenuItem value={7}>Week 7</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default WeekSelect;
