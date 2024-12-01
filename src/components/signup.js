// import { color } from 'chart.js/helpers';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register',{username,email,password})
        .then(result=> console.log(result))
        .catch(err=> console.log(err))
        navigate('/Login')
        // Check credentials and set user role
        // if (username === 'Pady' && password === '2022') {
        //     localStorage.setItem('userRole', 'student');
        //     setSuccessMessage('Login successful! Welcome, Pady!');
        //     navigate('/dashboard');
        // } else if (username === 'ngaiso' && password === '2023') {
        //     localStorage.setItem('userRole', 'employer');
        //     setSuccessMessage('Login successful! Welcome, Ngaiso!');
        //     navigate('/dashboard');
        // } else if (username === 'Munashe' && password === '2024') {
        //     localStorage.setItem('userRole', 'supervisor');
        //     setSuccessMessage('Login successful! Welcome, Parker!');
        //     navigate('/dashboard');
        // } else {
        //     alert('Invalid Username or Password');
        // }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input
                        className='inputs'
                        type="text"
                        id="email"
                        value={email}
                        autoComplete="off"
                        placeholder='Enter Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input
                        className='inputs'
                        type="text"
                        id="username"
                        value={username}
                        autoComplete="off"
                    
                        placeholder='Enter Username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">Password:</label> */}
                    <input
                    className='inputs'
                        type="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signup</button>
                <a href='/login' style={{padding: '20px'}}>Login</a>
            </form>
            {/* {successMessage && <p className="success-message">{successMessage}</p>} Display success message */}
        </div>
    );
};

export default Signup;