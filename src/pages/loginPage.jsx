import React from 'react'
import '../App.css'
import loginImage from '../assets/login image.png'
import LoginForm from '../components/loginForm'

const LoginPage = () => {
  return (
    <>
        <div className='loginpage col-12'>
            <div className='col-6 '>
                <img src={loginImage} alt="login" width={800} />
            </div>
            <div className='col-6' style={{display:"flex", justifyContent:"end"}}>
                <LoginForm/>
            </div>
        </div>
    </>
  )
}

export default LoginPage