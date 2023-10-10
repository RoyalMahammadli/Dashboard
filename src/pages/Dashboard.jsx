import React from 'react'
import './Dashboard.css'
import MyTab from '../Components/UI/MyTab'

function Dashboard() {
  return (
    <div className='dashboard'>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <MyTab />
      </main>
    </div>
  )
}

export default Dashboard