import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDOM from "react-dom"


function Header(){
  return(
    <header>
      <nav>
      <img src={logo} width="100px"></img>
      </nav>
    </header>
  )     
  }
  
function Footer() {
  return (
      <footer className='foot'>
          <small>© 2022 Aaron development. All rights reserved.</small>
      </footer>
  )
}

function Heading(){
  return(
    <h1 id="head"> Fun facts about React </h1>
  )
}

function MainContent(){ 
  return(
  <div className='MainContent'>
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

function NavBar(){
  return(
    <div>
      <ul className='nav-bar'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

function ReactPic(){
  return(
    <img src={logo} width="200px" className='pic'></img>
  )
}


  
function Page() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Heading/>
      <MainContent/>
      <Footer/>
      {/* <ReactPic/> */}
    </div>
    );
}


ReactDOM.render(<Page/>,document.getElementById("root"))
export default Page;
