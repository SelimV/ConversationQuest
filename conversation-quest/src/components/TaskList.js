import { List } from "@mui/material";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";

function TaskList({tasks, activeTasks, setActiveTasks}) {

    return <List>
		{tasks.map(task=><TaskListItem task={task} active={activeTasks.includes(task.id)} setActive={
			active => {
				if(active) {
					let purkka = new Set(activeTasks)
					purkka.add(task.id)
					purkka = Array.from(purkka)
					setActiveTasks(purkka)
				} else {
					let purkka = new Set(activeTasks)
					purkka.delete(task.id)
					purkka = Array.from(purkka)
					setActiveTasks(purkka)
				}
			}
		}/>)}
    </List>;
}
export default TaskList;
