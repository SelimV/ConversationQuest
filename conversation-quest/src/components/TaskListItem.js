import {ListItem } from "@mui/material";
import React, { useState } from "react";
import { AppBar, Stack, IconButton, Button, Dialog, DialogTitle } from '@mui/material';
import './Style.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container } from "@mui/system";


function TaskListItem({task, active, setActive}) {
  const [opened, setOpened]=useState(false)
	const test = (ev) => {
		setOpened(false);
		ev.stopPropagation() // !!!
	}
	return <ListItem className="task-item" button={true} onClick={() => setOpened(true)}>
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
			</p>
		</Dialog>

        <Box className="task-name">
		    <h2 >{task.title}</h2>   
        </Box>        
		{/* <br/> */}

		{active ?
			<Button  className="activation-button" onClick={(ev)=>{setActive(false);ev.stopPropagation();}}>Cancel</Button>
		:
			<Button className="activation-button" onClick={(ev)=>{setActive(true);ev.stopPropagation();}}>Activate</Button>
		}
			
    </ListItem>
}
export default TaskListItem;
