import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='nav'>
        <div className='nav_logo' onClick={() => navigate("/")}>CiviLog</div>
        <div className='nav_about' onClick={() =>navigate('/about')}>About</div>
    </div>
  )
}

export default Navbar