import React, {useState} from 'react'
import "./LoginSignup.css"
import {NavLink, useNavigate} from 'react-router-dom'
import {useAuth} from '../../hooks/AuthContext'


export function LoginSignup() {
  
  const {register} = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


       const handleSubmit = async(e) =>{
        e.preventDefault()
        try {await register({
          name,
          email,
          password
         })
         alert("Signup successful");
         navigate("/login");
        } catch(error){
          console.log(error);
          alert("Login failed");
        }
       }

        return (
          <div className="fullscreen-center">
    <div className="signup-container">
        <h2>Signup</h2>

        <form  onSubmit={handleSubmit}>
        
          <div className ="select">
            <label htmlFor="name">Full Name</label>
            <input
            type="text" 
            id="name" 
            name="name" 
            onChange={(e)=> setName(e.target.value)}
            required
            className ="select" />
          </div>
          <div className ="select">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={(e)=> setEmail(e.target.value)}
            required 
            className ="select"/>
          </div>

          <div> 
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password" 
            name="password"
            onChange = {(e) => setPassword(e.target.value)} 
            required
            className ="select" />
          </div>

          <div >
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
              className ="select"
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="terms" name="terms" required className='checker'/>
            <label htmlFor="terms"> I agree to the <a href="#">Terms & Conditions</a></label>
          </div>
          <button 
          className='submit'
          type="submit" >Sign Up</button>
        </form>

        <div className="login-here">
          Already have an account? <NavLink to='/login' className="login">
           Login here
          </NavLink>
        </div>
      </div>
    </div>

  )
}

