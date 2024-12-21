import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Navbar from './components/Navbar';  // استيراد الـ Navbar
import Book from './components/Book';
import Checkout from './components/Checkout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/book" element={<Book />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
