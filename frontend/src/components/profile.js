import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Alert, Row, Col, Nav } from "reactstrap";
import { Button } from 'reactstrap';
import "./styles/profile.css";
import ImgPerfil from "../img/perfil.svg";

const ProfileInf = (props) => {
    return (
      <div class="card-profile">
        <div>
          <img className="picture-profile" src={ImgPerfil} alt="img-portada"/>
        </div>

        <div class="container-date-profile">
          <h4>Jose Leopoldo M.</h4>
          <p>El cielo es azul</p>
          <p>{props.description}</p>
        </div>
        <Row>
            <Col><h4>0 followers</h4></Col>
            <Col><h4>0 followings</h4></Col>
        </Row>
        <Button color="info">info</Button>{' '}
      </div>
    );
  };

export default ProfileInf;