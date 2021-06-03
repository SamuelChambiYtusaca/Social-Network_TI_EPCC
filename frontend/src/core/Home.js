import React, { useState } from "react";
import { Alert, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import "./styles/Login.css";
import "./styles/general.css";
import Header from "../components/header";
import home from "../img/home.svg"

const Home = (req, res) => {
  return (
    <div>
      <Header />
      <Row>
        <Col className="ms-5 mt-5">
          <img className="imagen" src={home} alt="img-portada" />
        </Col>
        <Col className="mt-35">
          <h1 className="title1">Red Social</h1>
          <h1 className="title2">UNSA</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
