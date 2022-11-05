import React, { useState } from "react";
import Button from '@mui/material/Button';
import Streaks from "./Streaks";

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
	<Streaks/>
		Total tasks done: {taskHistory.length}, succeed: {taskHistory.filter(el=>el.result=='succeed').length}, failed: {taskHistory.filter(el=>el.result=='failed').length}
	<div>streak näkymä</div>
	<h2>Achievements</h2>
	<ul>
		{achievements.map((el)=> <li>{el.description} Status: {el.check(taskHistory).done ? "Done" : `Not Done: ${el.check(taskHistory).progress*100}%`}</li>)}
	</ul>
	<h2>History</h2>
	<ul>
		{taskHistory.map(el => <li>{el.task.title} result: {el.result} at: {new Date(el.date).toLocaleString()}</li>)}
	</ul>
	</>);
}
export default ProgressPage;
