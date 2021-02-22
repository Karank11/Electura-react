import React from 'react'
import web from '../src/images/img2.svg';
import card1 from '../src/images/c1.png';
import card2 from '../src/images/c2.jpg';
import card3 from '../src/images/c3.jpg';
import {NavLink} from 'react-router-dom';
const Home = ()=>{
    return(
        <>
        <div className="mydiv">
        <section id="header" className="d-flex align-items-center sec1" >
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h2>
                           <center>Your Learning Journey Matters to Us</center>                                 
                        </h2> 
                        <div className="row">
                        <div className="dash">
                            <span className="element-divider-separater"><center>______________</center></span>
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">                            
                            <h1>
                                <strong>Future achievers study from IITians Online</strong>
                            </h1>
                            <div className="mt-3">
                                < NavLink to="/register" className="btn btn-lg btn-register-free">REGISTER FOR FREE</  NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="home img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>       
        </section>
        <section id="header" className="d-flex align-items-center section2" >
              <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row ">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={card1} class="card-img-top" alt="Live Lecture" />
                                    <div class="card-body">
                                        <h1 class="card-title text-center">Online Live Classes</h1>
                                        <p class="card-text text-center">Get your concepts clear directly through a dedicated coach</p>                                        
                                    </div>
                                </div>                                
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={card2} class="card-img-top" alt="IITian Teachers" />
                                    <div class="card-body">
                                        <h1 class="card-title text-center ">IITian Teachers</h1>
                                        <p class="card-text text-center">Premium teachers who have passed one of the toughest exams themselves</p>
                                    </div>
                                </div>                                
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={card3} class="card-img-top" alt="9th to 12th" />
                                    <div class="card-body">
                                        <h1 class="card-title text-center">For Classes 9th to 12th</h1>
                                        <p class="card-text text-center">Changing the way of learning for 9th to 12th grade students with online 1 to 1 classes</p>
                                    </div>
                                </div>                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>            
        </section>
        </div>        
        </>
    );
};

export default Home;  