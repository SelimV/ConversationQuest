import React, { useState } from "react";
import Button from '@mui/material/Button';
import ReflectionSlider from "./ReflectionSlider";

function SingleTaskPage() {
  const [sliderValue, setSliderValue] = React.useState(50);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setSliderValue(newValue);
  };

  return <>
    <h2>Description</h2>
    
    <ReflectionSlider sliderValue={sliderValue} sliderValueChangeHandler={handleChange} />
  </>;
}
export default SingleTaskPage;
