import React, { useState } from "react";

function App(){
  const [page, setPage]=useState("landing") //pges: "landing", "login", ...
  
  switch(page){
    case "landing": return <>
      <p>landing page</p>
      <button onClick={()=>{setPage("login")}}>Start</button>
    </>;
    case "login": return <p>login page</p>;
    default:  <p>Stop hacking!</p>;
  }
}
export default App;
