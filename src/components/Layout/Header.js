import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to ='/' className="navbar-brand" href="#">FormEase</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to ='/' className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/result' className="nav-link" >Result</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/faq' className="nav-link" >FAQ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-link" >About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contactus' className="nav-link" >contact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      <button className='bell-icon'><IoNotificationsOutline></IoNotificationsOutline></button>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header