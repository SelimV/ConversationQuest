import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Container, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import Streaks from "./Streaks";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CircularProgress from '@mui/material/CircularProgress';
// import strftime from 'strftime';

function AchievementItem({el, done, progress}){

	return (<>
		<ListItem className="task-item" button={true}>
		  <h3 className="task-name" style={{
				margin: 0
			}}>{el.description}</h3> 
			<Box>{done ?  
				<Box sx={{
					lineHeight: '0'
				}}> <VerifiedRoundedIcon fontSize="large" sx={{
					color: "green",
					// paddingRight: '5px'
				}} 
				/> </Box>
				:
				<Box sx={{
					position: 'relative',
					lineHeight: 0,
				}}>
					<CircularProgress 
						variant="determinate" 
						style={{ color: '#d3cf28'}}
						size={35} 
						thickness={10} 
						value={progress} 
					/> 
					<p style={{
						position: 'absolute',
						top: 'calc(50% - 0.5em)',
						lineHeight: '100%',
						margin: '0',
						width: '100%',
						textAlign: 'center'
					}}>{`${progress}%`}</p>
				</Box>
			}
			</Box>
		</ListItem>
	</>)
}

function getTimeString(date){
	return `${date.getDate()}.${date.getMonth()+1}. ${date.getHours()}:${date.getMinutes()}`
}

function HistoryItem({el}){

	return (<>
		<ListItem className="task-item" button={true}>
		  <h3 className="task-name" style={{
				margin: 0,
			}}>{el.task.title}</h3> 
			<Box>
			<p style={{margin: 0}}>Result: {el.result == "succeed" ? "success" : el.result}</p>
			<p style={{margin: 0}}>{getTimeString(new Date(el.date))} </p>
			</Box>
		</ListItem>
	</>
	)
}

function ProgressStats({taskHistory}) {
	return <>
			<Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
				<Box>
					<h3 style={{textAlign: 'center'}}>{taskHistory.length}</h3>
					Total tasks done
				</Box>
				<Box>
					<h3 style={{textAlign: 'center'}}>{taskHistory.filter(el=>el.result=='succeed').length}</h3>
					<p>succeeded </p> 
				</Box>
				<Box> 
					<h3 style={{textAlign: 'center'}}>{taskHistory.filter(el=>el.result=='failed').length}</h3>
					<p>failed</p>
				</Box>
			</Box>
			 
	</>
}

function ProgressPage({taskHistory}){
	const achievements = [
		...[1,5,25,50,100].map(num => {return {
			description: `Successfully complete ${num} task${num > 1 ? 's':''}`,
				check: (taskHistory) => {
					const tasksCompleted = taskHistory.filter(el=>el.result == "succeed").length;
					return {done: tasksCompleted >= num, progress: tasksCompleted/num};
			}
		}})
	,
	];
	return (<Container>
	<h2>Progress</h2>
	<ProgressStats taskHistory={taskHistory}/>
	<Streaks taskHistory={taskHistory}/>
	<h2>Achievements</h2>
	<List>
		{achievements.map((el)=> <AchievementItem el={el} done={el.check(taskHistory).done} progress={el.check(taskHistory).progress*100} />)}
	</List>
	<h2>History</h2>
	<List>
		{taskHistory.map(el => <HistoryItem  el={el}/>)}
	</List>
	</Container>);
}
export default ProgressPage;
