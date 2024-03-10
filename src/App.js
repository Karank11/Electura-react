import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Tutor from "./pages/Tutor";
import Login from "./pages/Login";
import Course from "./pages/Course";
import Register from "./pages/Register";
import JoinAsTeacher from "./pages/JoinAsTeacher";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar className="navbar"></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tutor" component={Tutor} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/jointeacher" component={JoinAsTeacher} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default App;
