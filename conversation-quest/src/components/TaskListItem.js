import {ListItem } from "@mui/material";
import React, { useState } from "react";
import { AppBar, Stack, IconButton, Button, Dialog, DialogTitle } from '@mui/material';
import './Style.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container } from "@mui/system";
import ReflectionSlider from "./ReflectionSlider";


function TaskListItem({task, active, setActive, addTaskHistory}) {
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
			Difficulty: 
			{task.difficulty}
			Time usage estimate:
			{task.time}
			</p>
            <p>How did it go?</p>
            <ReflectionSlider sliderValue={sliderValue} sliderValueChangeHandler={handleChange} />
            </Container>
		</Dialog>

        <Box className="task-name">
		    <h2 >{task.title}</h2>   
        </Box>        

		{active ?
			<Box className="small-div">
				<Button 
                    onClick={(ev)=>{setActive(false, task);addTaskHistory(task, "succeed", 0);ev.stopPropagation();}}
                    >
                    Completed
                </Button>
				<Button onClick={(ev)=>{setActive(false, task);addTaskHistory(task, "failed", 0);ev.stopPropagation();}}>
                    Failed
                </Button>
			</Box>
		:
			<Button className="activation-button" onClick={(ev)=>{setActive(true, task);ev.stopPropagation();}}>Activate</Button>
		}
			
    </ListItem>
}
export default TaskListItem;
