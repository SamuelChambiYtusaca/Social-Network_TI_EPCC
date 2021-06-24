<<<<<<< HEAD
import React, { useState }  from "react";
import { Alert, Row, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { names } from '../functions/user-data';
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import Auth from "../functions/auth";

=======
import React, { useState } from "react";
import { signin, authenticate, isAuthenticated } from "./apiCore";
import { Alert, Row, Col, Nav } from "reactstrap";
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";
import Post from "../components/post";
>>>>>>> 6e6be143bbe2dacd086cafc19ed0a896f7bcfee0

const Profile = (req, res) => {
  return (
    <div>
<<<<<<< HEAD
      <Auth />
      <SearchBar/>
      <NavBar/>
      <Link to="/logout" className="alert-link">
        Salir
      </Link>
=======
      <Row className="section-start">
        <Col  xs="4" className="ProfileInf">
          <ProfileInf />
        </Col>
        <Col>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Post/>
            </Col>
          </Row>
        </Col>
      </Row>
>>>>>>> 6e6be143bbe2dacd086cafc19ed0a896f7bcfee0
    </div>
  );
};

export default Profile;
