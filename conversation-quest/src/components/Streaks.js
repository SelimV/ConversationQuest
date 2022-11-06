import React from "react";
import { Box, Container } from "@mui/material";
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';
import CircularProgress from '@mui/material/CircularProgress';
import Circle from '@mui/icons-material/Circle';


function StreakIndicator({ score, current }) {
    const style = { color: current ? "red" : "black" };
    const dotStyle = { color: current ? "red" : "lightGrey" };
    return <Box height={40} width={40} display="flex" alignItems="center" justifyContent="center">
        {score === 0 ?
        <Circle fontSize="small" style={dotStyle} /> :
        score < 100 ?
        <CircularProgress variant="determinate" style={style} size={30} thickness={10} value={score} /> :
        <SentimentVerySatisfied
            fontSize="large"
            style={style} />}
    </Box>;
}

function Streaks({taskHistory}) {
    return <Container disableGutters>
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