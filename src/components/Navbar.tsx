// import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom' 

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  my-navbar bg-dark">
        <div className="container-fluid">
          
          <a className="navbar-brand" href="#"><img className="logo" src="./logo2.jpg"></img></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu#Cat">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#aboutus">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar