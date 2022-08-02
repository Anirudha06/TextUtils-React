import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import TextForm from './components/TextForm';

function App() {
    const [mode, setMode] = useState('light')
    // const [redMode, setRedMode] = useState('light')
    // const [greenMode, setGreenMode] = useState('light')
    const [alert, setAlert] = useState(null)
    const showAlert= (message ,type)=>{
     setAlert({
        msg: message,
        type: type 
     })
     setTimeout(() => {
        setAlert(null)
     }, 2000);
    }
    
    const toggleMode=()=>{
        if(mode === 'light')
        {
            setMode('dark');
            document.body.style.backgroundColor='rgb(28 56 86)';
            showAlert('Dark Mode Has Been Enabled','success ');
            document.title='TextUtils-Dark Mode';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert('Light Mode Has Been Enabled','success ');
            document.title='TextUtils-Light Mode';
        }
      }
    const toggleRedMode=()=>{
        if(mode === 'light')
        {
            setMode('dark');
            document.body.style.backgroundColor='rgb(245 22 22)';
            showAlert('Red Mode Has Been Enabled','success ');
            document.title='TextUtils-Red Mode';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert('Light Mode Has Been Enabled','success ');
            document.title='TextUtils-Light Mode';
        }
      }
    const toggleGreenMode=()=>{
        if(mode === 'light')
        {
            setMode('dark');
            document.body.style.backgroundColor='#139117';
            showAlert('Green Mode Has Been Enabled','success ');
            document.title='TextUtils-Green Mode';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert('Light Mode Has Been Enabled','success ');
            document.title='TextUtils-Light Mode';
        }
      }
return(
<>
<Router>

<Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} toggleGreenMode={toggleGreenMode}/>
<Alert alert={alert} />
<div className="container">
<Routes>
    <Route exact path="/about" 
     element={<About/>} />
     <Route exact path="/home" 
     element={<TextForm title= "Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>} />
</Routes>
{/* <TextForm title= "Enter The Text To Analyze" mode={mode} showAlert={showAlert}/> */}
{/* <About /> */}
</div>
</Router>
</>
);
}



export default App;