import React, { useState } from "react";
import { Box, Container, Slider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SentimentVeryDissatisfied from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutral from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';




function ReflectionSlider({sliderValue, sliderValueChangeHandler}) {
    return <Container>
        <Typography>How did it go? </Typography>
        <Box display="flex" justifyContent="space-between">
        <SentimentVeryDissatisfied/>
        <SentimentNeutral/>
        <SentimentVerySatisfied/>
        </Box>
        <Slider value={sliderValue} onChange={sliderValueChangeHandler}/>
    </Container>
}
export default ReflectionSlider;