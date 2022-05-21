import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
function Nav() {
const {logout} = useAuth0();

  return (
    <div className='nav'>
    <Link to = "/" className='styles'>Home</Link>
    <Link to = "/about" className='styles'>About</Link>
    <Link to = "/dashboard" className='styles'>Dashboard</Link>
    <button onClick={() => logout()} >Logout</button>
    </div>
  )
}

export default Nav