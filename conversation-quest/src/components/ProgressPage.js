import React, { useState } from "react";
import Button from '@mui/material/Button';
import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import Streaks from "./Streaks";

function AchievementItem({el, done, progress}){

	return (<>
		<ListItem className="task-item" button={true}>
		  <h3 className="task-name">{el.description}</h3> 
			<p>Status: {done ? "Done" : `${progress}%`}</p>
		</ListItem>
	</>)
}


function HistoryItem({el}){

	return (<>
		<ListItem className="task-item" button={true}>
		  <h3 className="task-name">{el.task.title}</h3> 
			<Box>
			<p>Result: {el.result == "succeed" ? "success" : el.result}</p>
			<p>{new Date(el.date).toLocaleString()} </p>
			</Box>
		</ListItem>
	</>
	)
}

function Streaks({taskHistory}) {
	return <>
		<h2>Streaks</h2>
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
	return (<>
	<p>Progress page</p>
	<Streaks taskHistory={taskHistory}/>
	<h2>Achievements</h2>
	<List>
		{achievements.map((el)=> <AchievementItem el={el} done={el.check(taskHistory).done} progress={el.check(taskHistory).progress*100} />)}
	</List>
	<h2>History</h2>
	<List>
		{taskHistory.map(el => <HistoryItem  el={el}/>)}
	</List>
	</>);
}
export default ProgressPage;
