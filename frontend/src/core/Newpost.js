import React, { useState } from "react";
import { signin, authenticate, isAuthenticated } from "./apiCore";
import { Alert, Container, Row, Col, Nav } from "reactstrap";
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";
import NewpostInf from "../components/newpost";
import Post from "../components/post";
import Auth from "../functions/auth";

const Newpost = (req, res) => {
  return (
    <div>
      <Auth />
        <Row className="all-container">

          <ProfileInf />
        <Col className="section-main">
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
              <NewpostInf/>
            </Col>
          </Row>
        </Col>
        </Row>
    </div>
  );
};

export default Newpost;
