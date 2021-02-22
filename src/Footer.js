import React from 'react';
import "./Footer.css";
import {NavLink} from "react-router-dom";
const Footer= ()=>{
    return(
        <>
        <div className="">
        <footer  className='text-center '>
                <div className="row main-footer ">
                    <div className="col-3 col-lg "><NavLink to="/">Home</NavLink></div>
                    <div className="col-3 col-lg"><NavLink to="/about">About Us</NavLink></div>
                    <div className="col-6 col-lg"><NavLink to="/jointeacher">Join as Teacher</NavLink></div>
                    <div className="col-4 col-lg"><NavLink to="/tutor">Our Tutors</NavLink></div>
                    <div className="col-3 col-lg"><NavLink to="/contact">Contact</NavLink></div>
                    <div className="col-3 col-lg"><NavLink to="/">Disclaimer</NavLink></div>
                    <div className="col-2 col-lg"><NavLink to="/">Blogs</NavLink></div>
                    <div className="col-4 col-lg"><NavLink to="/course">Buy a Course</NavLink></div>
                    <div className="col-4 col-lg"><NavLink to="/">Privacy Policy</NavLink></div>
                    <div className="col-4 col-lg"><NavLink to="/">Home New</NavLink></div>  
                    <div className="row marg">
                        <p>Copyright © 2021 Electura | Powered by BrandCobblers Services Pvt. Ltd.</p>
                    </div>                  
                </div>         
        </footer>
        </div>
        </>
        
    );
};

export default Footer;

