import React from 'react'
import '../../CSS/SubPages/SpecialHeader.css'



const SpecialHeader = ({ text }) => {
    return (
            <div className='position-sticky'>
                <div className='Header-Container Header-Container1'>
                    <div className='heading heading1'>
                        <span className='the the1'>The</span>
                        <span className='siren siren1'>Siren</span>
                    </div>
                    {text && <p className='Get_Started_Text'>{text}</p>}
                </div>
            </div>
    )
}

export default SpecialHeader
