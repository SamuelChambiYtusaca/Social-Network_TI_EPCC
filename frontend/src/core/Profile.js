import React, { useState }  from "react";
import Body from "../components/signIn";
import { signin, authenticate, isAuthenticated } from './apiCore';
import { Alert, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import "./styles/Login.css";
import Welcome from "../components/welcome";

const Profile = (req, res) => {
  return (
    <div>
      <Welcome/>
    </div>
  );
};

export default Profile;