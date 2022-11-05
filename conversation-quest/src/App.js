import React, { useState } from "react";
import LandingPage from "./components/LandingPage";

function App(){
  const [page, setPage]=useState("landing") //pges: "landing", "login", ...
  
  switch(page){
    case "landing": return <LandingPage moveToLogin={()=>setPage("login")} x="lol" />;
    case "login": return <p>login page</p>;
    default:  <p>Stop hacking!</p>;
  }
}
export default App;
