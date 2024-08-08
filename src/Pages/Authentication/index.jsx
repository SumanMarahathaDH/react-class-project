import React from 'react'
import { useState } from 'react'
import LoginForm from '../../Components/Forms/LoginForm'
import { login } from './services'

const Authentication = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginResponse = await login()
    console.log(loginResponse)
  }
  return (
    <div className='login-form'>
      <h5>Login</h5>
      <LoginForm loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Authentication