import React, { useState } from "react";
import Button from '@mui/material/Button';

function ProgressPage({moveToLogin, x}){
    return <>
	<p>Progress page</p>
	<h2>Streaks</h2>
	<div>streak näkymä</div>
	<h2>Achievements</h2>
	<ul>
		<li>Achievement 1</li>
		<li>Achievement 2</li>
		<li>Achievement 3</li>
	</ul>
  </>;
}
export default ProgressPage;
