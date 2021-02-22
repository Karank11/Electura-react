import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import bg from "../src/images/bg.jpg";
import Footer from "./Footer";
import Home from './Home';
import About from './About';
import Tutor from './Tutor';
import Login from './Login';
import Course from './Course';
import Register from './Register';
import JoinAsTeacher from './JoinAsTeacher'
import Contact from './Contact';
import Navbar from "./Navbar";

const App = ()=>{
    return(
        
        <>        
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tutor" component={Tutor} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/jointeacher" component={JoinAsTeacher} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to="/"/>
        </Switch>  
        <Footer/>   
        </>
    );
};

export default App;  