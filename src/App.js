
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import LandingPage from './components/LandingPage'; // Import LandingPage component
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>  );
}

export default App;
