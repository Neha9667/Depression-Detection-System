import './App.css';
import {Route, Routes }
from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';


function App() {
  return (
    <div>
      <Navbar/>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    
                </Routes>
    </div>
  );
}

export default App;
