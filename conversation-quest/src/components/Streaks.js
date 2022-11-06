import React, { useState } from "react";
import { Box, Container, Slider, Typography } from "@mui/material";
import SentimentVeryDissatisfied from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutral from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';
import CircularProgress from '@mui/material/CircularProgress';
import Circle from '@mui/icons-material/Circle';


function StreakIndicator({ score, current }) {
    const style = { color: current ? "red" : "black" };
    return <Box height={40} width={40} display="flex" alignItems="center" justifyContent="center">
        {score === 0 ?
        <Circle fontSize="small" style={style} /> :
        score < 100 ?
        <CircularProgress variant="determinate" style={style} size={30} thickness={10} value={score} /> :
        <SentimentVerySatisfied
            fontSize="large"
            style={style} />}
    </Box>;
}

function Streaks() {
    return <Container>
        <h2>Streak</h2>

        <Box width="100%">
            {[...Array(3).keys()]
                .map(week =>
                    <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
                        {[...Array(7).keys()]
                            .map(day =>
                                <StreakIndicator score={week * day * 10} current={week === 2&& day===6} />
                            )}
                    </Box>
                )}
        </Box>
    </Container>
}
export default Streaks;