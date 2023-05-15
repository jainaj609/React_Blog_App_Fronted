import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../CSS/Login.css'
const Login = ({ handleToggle, setToken }) => {
    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { ...user };
        JSON.stringify(data)
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/app/category/login`, data)
        alert(JSON.stringify(res.data));
        if (res.data.msg === 'User is not registered, try to register first') {
            handleToggle()
        }
        if (res.data.msg === 'User loged in successfully') {
            console.log(res.data.msg);
            setToken(res.data.token);
            console.log(res.data.token);
        }
    }
    return (
        <>
            <div className='Login'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type='email' name='email' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Password:</label>
                        <input type='password' name='password' onChange={handleChange} />
                    </div>
                    <input type='submit' value={'Login'} />
                    <p>Need an account? <label onClick={handleToggle}><span>Sign up</span></label></p>
                </form>
            </div>
        </>

    )
}

export default Login
