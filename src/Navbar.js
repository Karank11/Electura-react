import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return (
      <>
        <div className="container-fluid nav_bg py-3">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink  className="navbar-brand" to="/">Electura</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink exact activeClassName="main_active"  className="nav-link active" aria-current="page" to="/">Home</NavLink  >
                      </li>

                      <li className="nav-item">
                        <NavLink activeClassName="main_active"  className="nav-link" to="/about">About Us</NavLink  >
                      </li>

                      <li className="nav-item">
                        <NavLink  activeClassName="main_active" className="nav-link" to="/tutor">Our Tutors</NavLink  >
                      </li>

                      <li className="nav-item">
                        <NavLink activeClassName="main_active"  className="nav-link" to="/course">Buy a Course</NavLink  >
                      </li>

                      <li className="nav-item">
                        <NavLink activeClassName="main_active"  className="nav-link" to="/jointeacher">Join as Teacher</NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink activeClassName="main_active"  className="nav-link" to="/contact">Contact</NavLink  >
                      </li>

                      <li className="nav-item">
                        <NavLink activeClassName="main_active"  className="nav-link" to="/login">Login</NavLink  >
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;