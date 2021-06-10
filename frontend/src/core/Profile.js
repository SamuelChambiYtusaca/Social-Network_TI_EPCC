import React, { useState }  from "react";
import Body from "../components/signIn";
import { signin, authenticate, isAuthenticated } from './apiCore';
import { Alert, Row, Col, Nav } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";


const Profile = (req, res) => {
  return (
    <div>
      
      <SearchBar/>
      <NavBar/>
    </div>
  );
};

export default Profile;