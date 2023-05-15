import React, { useState } from 'react'
import axios from 'axios'
import '../CSS/Register.css'


const Register = ({handleToggle}) => {

    const [user, setUser] = useState({ name: '', phone: '', email: '', password: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.name || !user.phone || !user.email || !user.password) {
            alert("Please Fill the All Details")
        }
        else {
            console.log(user);
            let data = { ...user };
            JSON.stringify(data)
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/app/category/register`, data)
            alert(JSON.stringify(res.data));
            handleToggle();
        }

    }

    return (
        <div className='Register'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onChange={handleChange} />
                </div>

                <div>
                    <label>Phone:</label>
                    <input type='number' name='phone' onChange={handleChange} />
                </div>

                <div>
                    <label>Email:</label>
                    <input type='email' name='email' onChange={handleChange} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={handleChange} />
                </div>
                <input type='submit' value={'Register'} />
                <p>Already have an account? <label onClick={handleToggle}><span>Log in</span></label></p>

            </form>
        </div>
    )
}

export default Register
