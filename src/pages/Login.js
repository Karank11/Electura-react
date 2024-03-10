import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";
import loginIcon from "../images/loginIcon.png";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Form className="login-form">
      <div className="col-lg-6 order-1 order-lg-2 header-img text-center">
        <img
          src={loginIcon}
          className="img-fluid animated text-center ml-5"
          alt="home img"
        />
      </div>

      <h1 className="font-weight-bold text-center"> Electura</h1>
      <h2 className="text-center">Login</h2>

      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="student@gmail.com" />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input type="password" />
      </FormGroup>

      <Button className="btn-md btn-dark btn-block">Log in</Button>

      <div className="text-center pt-3">Or continue with google account</div>

      <GoogleLoginButton />

      <div className="text-center pt-3">Or</div>

      <div className="text-center">
        <NavLink to="/register" className="nav-link font-weight-bold">
          Register Here
        </NavLink>
      </div>
    </Form>
  );
};

export default Login;
