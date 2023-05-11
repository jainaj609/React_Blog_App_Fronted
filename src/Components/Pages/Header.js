import React, { useState, useEffect } from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'
const Header = () => {
    const [Mobile, setMobile] = useState(false);
// Sticky Menu Area
useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
const [scrollTop,setScrollTop] = useState(0);
       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            // const header = document.querySelector('.parent-container');
            setScrollTop(window.scrollY);
            // scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
   
    return (
        <div className={Mobile? scrollTop>=400 ? ('is-sticky',setMobile(false)):'parent-container' : 'Box-shadow'}>
            <div className='Header-Container'>
                <div className='heading'>
                    <span className='the'>The</span>
                    <span className='siren'>Siren</span>
                </div>
                <div className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross className='Size'/> : <FaBars className='Size'/>}
                </div>
            </div>
            <div className={Mobile ? 'links-mobile' : 'links'}>
                <div className='child'>
                    <Link to='/' className='link'>Home</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Bollywood' className='link'>Bollowood</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Technology' className='link'>Technology</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Hollywood' className='link'>Hollywood</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Fitness' className='link'>Fitness</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Food' className='link'>Food</Link>
                </div>
            </div>

            <hr className='hrline hrline-afterlink' />

        </div>

    )
}

export default Header
