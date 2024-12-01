import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login',{username,password})
        .then(result=>{
            console.log(result);
            if (result.data==="success"){
                navigate('/Dashboard')
            }else{
                alert("wrong Username password TRA Again!");
                
            }
        })
        .catch(err=> console.log(err));
        
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
                        id="username"
                        value={username}
                        autocomplete="off"
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
                        autocomplete="off"
                        value={password}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;