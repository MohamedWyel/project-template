import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Error from './images/Error.jpg';
import Rooms from './components/Rooms'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<img src={Error} alt="Error page not found"/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
