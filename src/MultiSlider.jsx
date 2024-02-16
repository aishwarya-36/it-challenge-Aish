import React from "react";
import { RangeSliderDay, RangeSliderWeek } from "./RangeSlider";

export const MultiSliderDay = ({ isHidden, isDisabled }) => {
  return (
    <>
      <RangeSliderDay isDisabled={isDisabled} initValue={[6, 8]} />
      {isHidden ? (
        ""
      ) : (
        <div className="-ml-[300px]">
          <RangeSliderDay isDisabled={isDisabled} initValue={[22, 24]} />
        </div>
      )}
    </>
  );
};

export const MultiSliderWeek = ({ isHidden, isDisabled }) => {
  return (
    <>
      <RangeSliderWeek isDisabled={isDisabled} initValue={[2, 3]} />
      {isHidden ? (
        ""
      ) : (
        <div className="-ml-[300px]">
          <RangeSliderWeek isDisabled={isDisabled} initValue={[6, 7]} />
        </div>
      )}
    </>
  );
};
