import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8800/user/", formData);
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  const [loginFormData, setLoginFormData] = useState({
    loginName: "",
    loginPassword: "",
  });

  const handleChangeLogin = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8800/user/login", {
      name: loginFormData.loginName,
      password: loginFormData.loginPassword,
    });
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
    navigate("/user");
  };

  return (
    <div>
      <h1>Create an Account!</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" id="name" onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>

      <h1>Log In!</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="loginName">Name:</label>
        <input name="loginName" id="loginName" onChange={handleChangeLogin} />
        <label htmlFor="loginPassword">Password:</label>
        <input
          type="password"
          name="loginPassword"
          id="loginpassword"
          onChange={handleChangeLogin}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
