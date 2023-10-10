import React from 'react'
import Sidebar from '../Components/layout/Sidebar/Sidebar'
import Routing from '../Routing/Routing'

function MainLayout() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main>
                <Routing />
            </main>
        </div>
    )
}

export default MainLayout