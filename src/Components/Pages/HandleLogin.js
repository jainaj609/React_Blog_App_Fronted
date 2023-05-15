import React from 'react'
import '../CSS/SubPages/SpecialHeader.css'
import { useState } from 'react'
import Register from './Register';
import Login from './Login'

const SpecialHeader = ({token, setToken }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    return (
        <>
            <div className='position-sticky'>
                <div className='Header-Container Header-Container1'>
                    <div className='heading heading1'>
                        <span className='the the1'>The</span>
                        <span className='siren siren1'>Siren</span>
                    </div>
                    <div className='SignUp-Login'>
                        <h4 className='signup' onClick={handleToggle}>Sign Up</h4>
                        <h4 onClick={handleToggle}>Log in</h4>
                    </div>
                </div>
            </div>
            {toggle ? <Register handleToggle={handleToggle}/> : <Login handleToggle={handleToggle} setToken={setToken}/>}
        </>
    )
}

export default SpecialHeader
