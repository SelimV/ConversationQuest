import React, { useState } from "react";
import { Box, Container, Slider, Typography } from "@mui/material";
import SentimentVeryDissatisfied from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutral from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';


function StreakIndicator() {
    return <>vaa</>;
}

function Streaks() {
    return <Container>
        <h2>Streak</h2>

        <Box width="100%">
            {[...Array(3).keys()]
                .map(week =>
                    <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
                        {[...Array(7).keys()]
                            .map(week =>
                                <StreakIndicator />
                            )}
                    </Box>
                )}
        </Box>
    </Container>
}
export default Streaks;