import { NavLink } from 'react-router-dom'
import './login.css'
import React from 'react'

function Login() {
  return (
    <div>
           <div className="fullscreen-center">
    <div className="signup-container">
        <h2>Log In</h2>
        <form action="/login" method="POST">
         
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
        <div className="login-link">
          Already have an account? <NavLink to='/signup'>
             Sign up here
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
