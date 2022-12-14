import {Card, ListItem } from "@mui/material";
import React, { useState } from "react";
import { AppBar, Stack, IconButton, Button, Dialog, DialogTitle, Snackbar, TextField} from '@mui/material';
import './Style.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container } from "@mui/system";
import ReflectionSlider from "./ReflectionSlider";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function TaskListItem({task, active, setActive, addTaskHistory}) {
  const [opened, setOpened]=useState(false);
  const [openSnack, setOpenSnack]=useState(false);
  const [reflection, setReflection]=useState("");
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
            <Container maxWidth='sm' disableGutters>
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
			
			<Box sx={{ 
					display: 'flex', 
					justifyContent: 'space-around',
					margin: '1em 0',
					lineHeight: '2'
				}}>
				<Box>
				Difficulty: {[...Array(task.difficulty).keys()]
					.map(_ => <StarRoundedIcon sx={{
						verticalAlign: '-10%',
						color: 'rgba(0,0,0, 0.6)'
					}} />
				)}
				</Box>		
				<Box>
				Time usage estimate: {task.time}
				</Box>
			</Box>

			<Card sx={{ 
				padding: '1em',
				margin: '1em 0'
			 }}>
				{task.description}
			</Card>

		
			{active ?
				<div>
					<ReflectionSlider sliderValue={sliderValue} sliderValueChangeHandler={handleChange} />
					<TextField
						fullWidth
					  id="filled-textarea"
					  label="Self-reflection"
					  placeholder="Placeholder"
					  multiline
					  variant="filled"
					  onChange={(ev)=>setReflection(ev.target.value)}
					/>
					<Button onClick={(ev)=>{setActive(false, task);addTaskHistory(task, "succeed", sliderValue, reflection);setOpenSnack(true);setOpened(false);ev.stopPropagation();}}>Mark as completed</Button>
					<Button onClick={(ev)=>{setActive(false, task);addTaskHistory(task, "failed", sliderValue, reflection);setOpenSnack(true);setOpened(false);ev.stopPropagation();}}>Mark as failed</Button>
				</div>
			:
				<Button onClick={(ev)=>{setActive(true, task);ev.stopPropagation();}}>Activate</Button>
			}
            </Container>
		</Dialog>

        <Box className="task-name">
		    <h2 >{task.title}</h2>   
        </Box>        

	 	{ !active &&
			<Button className="activation-button" onClick={(ev)=>{setActive(true, task);ev.stopPropagation();}}>Activate</Button>
		}
			
		<Snackbar
        open={openSnack}
        autoHideDuration={1500}
        message="Task state saved"
		onClose={() => setOpenSnack(false)}
			anchorOrigin={{horizontal: 'center', vertical: 'top'}}
		  />
    </ListItem>
}
export default TaskListItem;
