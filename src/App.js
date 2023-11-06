import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
