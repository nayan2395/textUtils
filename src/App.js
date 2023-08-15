import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [theme, setTheme] = useState('light')
  const [alert, setAlert] = useState(null)
  // const [darkModeType, setDarkModeType] = useState('default')
  const [buttonColor, setbuttonColor] = useState('primary')

  const showAlert = (message, type) => {
    setAlert({
      'message': message,
      'type': type
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (theme === 'dark') {
      setTheme('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Lightmode enabled!", "success")
    }
    else {
      setTheme('dark')
      document.body.style.backgroundColor = '#182940'
      showAlert("Darkmode enabled!", "success")
    }
  }

  const selectDarkMode = (colourName, hexCode) => {
    // console.log(colourName, hexCode)
    // setDarkModeType(colourName);
    document.body.style.backgroundColor = hexCode;
    if (colourName === 'red')
      setbuttonColor('danger')
    else if (colourName === 'default')
      setbuttonColor('primary')
  }

  return (
    <>
      <Navbar title="textUtils" aboutText="About textUtils" mode={theme} toggleMode={toggleMode} selectDarkMode={selectDarkMode} alert={showAlert}></Navbar>
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading='Enter your text to format' mode={theme} alert={showAlert} buttonColor={buttonColor} ></TextForm>
      </div>
    </>
  );
}

export default App;
