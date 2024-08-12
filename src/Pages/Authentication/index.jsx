import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../Components/Forms/LoginForm'
import { environmentConfig } from '../../Utils/config/environmentConfig'
import { setItem } from '../../Utils/config/storageConfig'
import { getUserDetail, login } from './services'

const Authentication = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
    const loginResponse = await login()
    const accountId = environmentConfig.accountId
    const detailResponse = await getUserDetail(accountId)
    setItem('isAuthenticated', true)
    setItem('userDetails', JSON.stringify(detailResponse.data))
      navigate("/dashboard")
    }
    catch(err){
      alert(err)
    }
  }
  return (
    <div className='login-form'>
      <h5>Login</h5>
      <LoginForm loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Authentication