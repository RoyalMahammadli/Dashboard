import React from 'react'
import Sidebar from '../Components/layout/Sidebar/Sidebar'
import Routing from '../Routing/Routing'

function MainLayout() {
    return (
        <div>
            <Sidebar />
            <Routing />
        </div>
    )
}

export default MainLayout