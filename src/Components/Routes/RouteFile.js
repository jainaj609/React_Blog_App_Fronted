import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bollywood from '../Pages/Bollywood'
import Home from '../Pages/Home'
import TheLatest from '../Pages/SubPages/TheLatest'
import PageNotFound from '../Pages/PageNotFound'
import Register from '../Pages/Register'

const RouteFile = () => {
    return (
        <div>
            
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/:pageName' element={<Bollywood />} />
                    <Route path='/:category/:id' element={<TheLatest/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
        </div>
    )
}

export default RouteFile
