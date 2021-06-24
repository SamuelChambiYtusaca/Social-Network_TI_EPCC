import React, { useState }  from "react";
import { Alert, Row, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { names } from '../functions/user-data';
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import Auth from "../functions/auth";


const Profile = (req, res) => {
  return (
    <div>
      <Auth />
      <SearchBar/>
      <NavBar/>
      <Link to="/logout" className="alert-link">
        Salir
      </Link>
    </div>
  );
};

export default Profile;