import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDOM from "react-dom"

function TemporaryName(){ 
  return(
  <div>
  <img src={logo} width="100px"></img>
  <h1> Fun facts about React </h1>
    <ul>
      <li> Was first released in 2013 </li>
      <li> Was originally created by John Walke</li>
      <li> Has well over 100k stars on GitHub</li>
      <li> Is maintained by Facebook </li>
      <li> Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
  )
}
  
function App() {
  return (
    ReactDOM.render(<TemporaryName/>,document.getElementById("root")
    )
  );
}
export default App;
