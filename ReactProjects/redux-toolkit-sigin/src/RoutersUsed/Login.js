import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import "./Login.css"

function Login() {
    const {loginWithRedirect} =useAuth0()
  return (
    <div className='login'><h1> To get started to login</h1>
    This is Login Page
    <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  )
}

export default Login