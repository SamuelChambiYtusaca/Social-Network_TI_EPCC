import React from "react";
import Body from "../components/signIn";
import "./styles/Login.css";

const Login = (req, res) => {
  return (
    <div>
      <div className = "body">
          <Body />
      </div>
    </div>
  );
};

export default Login;