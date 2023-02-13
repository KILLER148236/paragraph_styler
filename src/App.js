//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  const [mode, setMode] = useState("light");
  const [btntxt, setbtntxt] = useState("Enable dark Mode");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {

    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode("dark")
      setbtntxt("Disable dark Mode")
      document.body.style.backgroundColor = "#083a6c"
      showalert("Dark mode has been enabled", "success")
      document.title = 'paragraph_styler-dark_mode';
    } else {
      setMode("light")
      setbtntxt("Enable dark Mode")
      document.body.style.backgroundColor = "white"
      showalert("Light mode has been enabled", "success")
    }
  }




  return (

    <Router>
      <Navbar title="TextUtils" aboutwebsite="About us" mode={mode} toggle={toggleMode} text={btntxt} />

      <Alert alert={alert}></Alert>
      <div className="container">



        <Routes>
          <Route exact path="/about" element={<About/>}/>
  
        

          <Route exact path="/" element={<TextForm your_name="Your Name" enter_text_here="Please write some text" mode={mode} alert={showalert} />}/>
          
          
        </Routes>

        
      </div>
    </Router>






  );
}

export default App;
