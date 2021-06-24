import React, { useState } from "react";
import { signin, authenticate, isAuthenticated } from "./apiCore";
import { Alert, Row, Col, Nav } from "reactstrap";
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";
import Post from "../components/post";
import Auth from "../functions/auth";

const Profile = (req, res) => {
  return (
    <div>
      <Auth />
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
    </div>
  );
};

export default Profile;
