import React from 'react'
import "./LoginSignup.css"
import { NavLink } from 'react-router-dom'


function LoginSignup() {
        return (
          <div className="fullscreen-center">
    <div className="signup-container">
        <h2>Signup</h2>
        <form action="/signup" method="POST">
          <div>
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label for="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="terms" name="terms" required />
            <label for="terms"
              > I agree to the <a href="#">Terms & Conditions</a></label
            >
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <div className="login-link">
          Already have an account? <NavLink to='/login'>
           Login here
          </NavLink>
        </div>
      </div>
    </div>

  )
}

export default LoginSignup