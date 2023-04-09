import './App.css';
import NavBar from './components/NavBar/Navbar';
import InputBox from './components/InputBox/InputBox'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if(theme === 'dark'){
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }else{
      setTheme('dark');
      document.body.style.backgroundColor = "#303030";
      document.body.style.color = "white";
    }
  }
  return (
    <>
    <NavBar title="TextUtils" theme={theme} toggle={toggleTheme}/>
    <InputBox heading="Enter text here" theme={theme}/>
    </>
  );
}

export default App;
