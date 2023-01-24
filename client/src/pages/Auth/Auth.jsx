import React, {useState} from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'

const Auth = () => {

  const [isSignup, setisSignup] = useState(false)
  return (
      <section class='auth-section'>
      <div class='auth-container'>
        { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/> }
      <form>
        <label htmlFor=''>
          <h4>Email</h4>
          <input type={"email"} name='email' id='email'/> 
        </label>
     

      <label htmlFor=''>
          <h4>Password</h4>
          <input type={"password"} name='email' id='password'/> 
        </label>
      <button type='submit' className='auth-btn'></button>
      </form> 
      </div>
      </section>
  )
}

export default Auth