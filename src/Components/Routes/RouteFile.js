import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Bollywood from '../Pages/Bollywood'
import Home from '../Pages/Home'
import TheLatest from '../Pages/SubPages/TheLatest'

const RouteFile = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/:pageName' element={<Bollywood />} />
                    <Route path='/:category/:id' element={<TheLatest/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteFile
