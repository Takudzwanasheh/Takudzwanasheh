import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StudentPortal from './components/StudentPortal';
import SupervisorPortal from './components/SupervisorPortal';
import EmployerPortal from './components/EmployerPortal';
import Signup from './components/signup';
import About from './components/About'
import Welcome from './components/Welcome'
import Contact from './components/Contact'
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path='/login' element={<Login />}/>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/student" element={<StudentPortal />} />
                    <Route path="/supervisor" element={<SupervisorPortal />} />
                    <Route path="/employer" element={<EmployerPortal />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;