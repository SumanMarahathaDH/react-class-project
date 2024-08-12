import React from 'react'
import { logout } from '../../Pages/Authentication/services'
import Button from '../Common/Button'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontSize: '1.1rem'}} href="#">Movie Application</a>
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