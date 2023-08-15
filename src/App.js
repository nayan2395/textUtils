import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ErrorPage from './router/error-page';
import Error404 from './components/Error404';
function App() {
  const [theme, setTheme] = useState('light')
  const [alert, setAlert] = useState(null)
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
      setbuttonColor('primary')
      showAlert("Lightmode enabled!", "success")
    }
    else {
      setTheme('dark')
      document.body.style.backgroundColor = '#182940'
      showAlert("Darkmode enabled!", "success")
    }
  }

  const selectDarkMode = (colourName, hexCode) => {
    document.body.style.backgroundColor = hexCode;
    if (colourName === 'red')
      setbuttonColor('danger')
    else if (colourName === 'default')
      setbuttonColor('primary')
  }

  return (
    <>
      <BrowserRouter >
        <Navbar title="textUtils" aboutText="About" mode={theme} toggleMode={toggleMode} selectDarkMode={selectDarkMode} alert={showAlert}></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path='/' element={<TextForm heading='Enter your text to format' mode={theme} alert={showAlert} buttonColor={buttonColor} ></TextForm>} errorElement={<ErrorPage />} />
            <Route path='/about' element={<About mode={theme} />} errorElement={<ErrorPage />} />
            <Route path='/*' element={<Error404 mode={theme} />} errorElement={<ErrorPage />} />
          </Routes>
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
