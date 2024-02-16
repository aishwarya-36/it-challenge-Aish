import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return value;
}

const marks = [
  {
    value: 6,
    label: "6",
  },
  {
    value: 12,
    label: "12",
  },
  {
    value: 18,
    label: "18",
  },
  {
    value: 24,
    label: "24",
  },
];

export function RangeSliderDay({ initValue, isDisabled }) {
  const [value, setValue] = React.useState([...initValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Day Availability"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        marks={marks}
        min={6}
        max={24}
        step={1}
        size="small"
        disabled={isDisabled}
        sx={{
          color: "#4e39f9",
          mb: 0,
        }}
      />
    </Box>
  );
}

export function RangeSliderWeek({ initValue, isDisabled }) {
  function valuetext(value) {
    const days = {
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
      7: "Sun",
    };
    return days[value];
  }

  const marks = [
    {
      value: 1,
      label: "Mon",
    },
    {
      value: 2,
      label: "Tue",
    },
    {
      value: 3,
      label: "Wed",
    },
    {
      value: 4,
      label: "Thu",
    },
    {
      value: 5,
      label: "Fri",
    },
    {
      value: 6,
      label: "Sat",
    },
    {
      value: 7,
      label: "Sun",
    },
  ];
  const [value, setValue] = React.useState([...initValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Week Availability"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
        marks={marks}
        min={1}
        max={7}
        step={1}
        disabled={isDisabled}
        sx={{
          color: "#4e39f9",
          mb: 0,
        }}
      />
    </Box>
  );
}
