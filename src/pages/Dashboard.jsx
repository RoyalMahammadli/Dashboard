import React from 'react'
import './Dashboard.css'
import MyAnchor from '../Components/UI/MyAnchor'

function Dashboard() {
  return (
    <div className='dashboard'>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <MyAnchor />
      </main>
    </div>
  )
}

export default Dashboard