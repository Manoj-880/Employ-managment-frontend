import React, { useState } from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";

const LoginForm = () => {
  const [formData, setformData] = useState({
    employId:'',
    password:''
  })
  const loginSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
  }
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
        <Form onSubmit={loginSubmit} className="login-form-content">
          <input
            name="id"
            type="text"
            value={formData.employId}
            placeholder="Employ ID"
            onChange={(e) => {
              setformData({ ...formData, employId: e.target.value });
            }}
            className="login-input col-12"
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => {
              setformData({ ...formData, password: e.target.value });
            }}
            placeholder="Password"
            className="login-input col-12"
          />
          <Button type="submit" variant="primary">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
