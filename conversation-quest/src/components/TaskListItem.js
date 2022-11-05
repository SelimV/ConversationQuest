import {ListItem } from "@mui/material";
import React, { useState } from "react";
import { AppBar, Stack, IconButton, Button, Dialog, DialogTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function TaskListItem({task, active, setActive, addTaskHistory}) {
  const [opened, setOpened]=useState(false)
	const test = (ev) => {
		setOpened(false);
		ev.stopPropagation() // !!!
	}
	return <ListItem button={true} onClick={() => setOpened(true)}>
		<Dialog open={opened} fullScreen={true}>
			<AppBar sx={{position: 'relative'}}>
				<Stack direction="row" spacing={1}>
					<IconButton onClick={test}>
						<ArrowBackIcon/>
					</IconButton>
					<DialogTitle>
						{task.title}
					</DialogTitle>
				</Stack>
			</AppBar>
			<p>
			{task.description}
			Difficulty: 
			{task.difficulty}
			Time usage estimate:
			{task.time}
			</p>
		</Dialog>

		<h2>{task.title}</h2>
		<br/>
		{active ?
			<div>
				<Button onClick={(ev)=>{setActive(false, task);addTaskHistory(task, "succeed", 0);ev.stopPropagation();}}>Mark as completed</Button>
				<Button onClick={(ev)=>{setActive(false, task);addTaskHistory(task, "failed", 0);ev.stopPropagation();}}>Mark as failed</Button>
			</div>
		:
			<Button onClick={(ev)=>{setActive(true, task);ev.stopPropagation();}}>Activate</Button>
		}
			
    </ListItem>
}
export default TaskListItem;
