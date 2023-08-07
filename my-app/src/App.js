import './App.css';
/* import About from './components/About'; */
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const[alert, setAlert] = useState(null);

  const [mode, setMode] = useState('light');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message, //we can use message instead of msg... NAME dosen't matter here
      tp: type //we can use type instead of tp... NAME dosen't matter here
    })

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const togleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - DarkMode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils - LightMode';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} togleMode={togleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    {/* <About /> */}
  
    </>
  );
}

export default App;
