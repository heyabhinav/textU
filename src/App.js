import './App.css';
import NavBar from './components/NavBar/Navbar';
import InputBox from './components/InputBox/InputBox'
import { useState } from 'react';
import About from './components/About/About';
import Alert from './components/Alert/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) =>{
    setAlert({
      type:type, message:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1250);
  }

  const toggleTheme = () => {
    if(theme === 'dark'){
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "Light mode enabled")
    }else{
      setTheme('dark');
      document.body.style.backgroundColor = "#303030";
      document.body.style.color = "white";
      showAlert("success", "Dark mode enabled")
    }
  }
  return (
    <Router>
      <div>
      <NavBar title="Text Utilities" theme={theme} toggle={toggleTheme}/>
      <div className='container mt-3' style={{height:"50px"}}>
        <Alert alert={alert}/>
      </div>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<InputBox heading="Enter text here" theme={theme} showAlert={showAlert}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
