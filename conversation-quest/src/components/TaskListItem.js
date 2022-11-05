import {ListItem } from "@mui/material";
import React, { useState } from "react";



function TaskListItem({task}) {
    
    return <ListItem button={true}>
        {task.name}
    </ListItem>
}
export default TaskListItem;