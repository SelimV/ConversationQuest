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
    const now=Date.now()
    const nowDate=new Date(now);
    const weekday=(nowDate.getDay()+6)%7;// 0=monday ... 6=sunday 
    const weekStart=now-(nowDate.getMilliseconds()+1000*(nowDate.getSeconds()+60*(nowDate.getMinutes()+60*(nowDate.getHours()+24*weekday))));
    const msDay=1000*60*60*24;
    const msWeek=7*msDay;
    

    return <Container disableGutters>
        <h2>Streak</h2>

        <Box width="100%">
            {[...Array(3).keys()].reverse()
                .map(week =>
                    <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
                        {[...Array(7).keys()]
                            .map(day =>{
                                return <StreakIndicator score={
                                    taskHistory
                                    .filter(task=> task.date>weekStart-week*msWeek+day*msDay
                                        &&
                                        task.date<=weekStart-week*msWeek+(day+1)*msDay)                                    
                                .reduce((prev,task)=>prev+task.score,0)} current={week === 0 && day===weekday} />;
                            }
                            )}
                    </Box>
                )}
        </Box>
    </Container>
}
export default Streaks;