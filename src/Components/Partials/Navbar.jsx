import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../Pages/Authentication/services'
import Button from '../Common/Button'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="images/logo.svg" className='logo' alt="LOGO" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Button onClick={logout} className="btn d-inline ms-auto btn-outline-success">Logout</Button>
    </div>
  </div>
</nav>
  )
}

export default Navbar