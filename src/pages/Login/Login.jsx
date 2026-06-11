import {NavLink, useNavigate} from 'react-router-dom'
import './login.css'
import React, {useState} from 'react'
import {useAuth} from '../../hooks/AuthContext'

export function Login() {
  const {login} = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading]= useState (false)

  

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {await login({email, password})

  alert("You're logged in")
  navigate('/')
  
  }catch(error){
      console.log(error)
      alert("login failed")
    }finally{
      setLoading(false)
    }
    
    
  }

  return (
    <div>
           <div className="fullscreen-center">
    <div className="signup-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
         
          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            onChange = {(e)=> setEmail(e.target.value)}
            required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            onChange = {(e)=> setPassword(e.target.value)}
            required />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Login user..." : "Log In"}</button>
        </form>
        <div className="login-link">
          Don't have an account yet? <NavLink to='/signup'>
             Sign up here
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}


