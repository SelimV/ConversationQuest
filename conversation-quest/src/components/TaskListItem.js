import {ListItem } from "@mui/material";
import React, { useState } from "react";
import { AppBar, Stack, IconButton, Button, Dialog, DialogTitle } from '@mui/material';
import './Style.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReflectionSlider from "./ReflectionSlider";
import { Container } from "@mui/system";


function TaskListItem({task, active, setActive}) {
  const [opened, setOpened]=useState(false)
  const [sliderValue, setSliderValue] = React.useState(50);
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };
	const test = (ev) => {
		setOpened(false);
		ev.stopPropagation() // !!!
	}
	return <ListItem className="task-item" button={true} onClick={() => setOpened(true)}>
		<Dialog open={opened} fullScreen={true}>
            <Container maxWidth='sm'>
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
            <p>How did it go?</p>
            <ReflectionSlider sliderValue={sliderValue} sliderValueChangeHandler={handleChange} />
            </Container>
		</Dialog>

		<h2>{task.title}</h2>
		<br/>
		{active ?
			<Button onClick={(ev)=>{setActive(false);ev.stopPropagation();}}>Cancel</Button>
		:
			<Button onClick={(ev)=>{setActive(true);ev.stopPropagation();}}>Activate</Button>
		}
			
    </ListItem>
}
export default TaskListItem;
