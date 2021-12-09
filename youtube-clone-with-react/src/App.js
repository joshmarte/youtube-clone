import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
// import Header from "./Header"
import About from './Components/About';


function App() {
  return (
    // <h1>Hello World</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}/>
        <Route path="/about" element={<><NavBar/><About/></>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
