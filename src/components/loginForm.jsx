import React from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";

const LoginForm = () => {
  return (
    <div className="col-8 form">
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="Logo" className="col-12" />
        </div>
        <div className="brand-name">
          <h1 className="brand-name">SM Services</h1>
        </div>
      </div>
      <div className="login-form">
        <h2 className="form-heading">Login</h2>
        <Form className="login-form-content">
          <input
            name="id"
            type="text"
            placeholder="Employ ID"
            className="login-input col-12"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="login-input col-12"
          />
          <Button variant="primary">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
