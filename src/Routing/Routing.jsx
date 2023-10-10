import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Forecast from '../pages/Forecast'
import AllOfices from '../pages/AllOfices'
import Employees from '../pages/Employees'

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/forecast' element={<Forecast />} />
                <Route path='/allofices' element={<AllOfices />} />
                <Route path='/employees' element={<Employees />} />
            </Routes>
        </div>
    )
}

export default Routing