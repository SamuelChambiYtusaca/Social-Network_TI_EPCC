import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Alert, Row, Col, Nav } from "reactstrap";
import { Button } from "reactstrap";
import "./styles/profile.css";
import ImgPerfil from "../img/perfil.svg";

const ProfileInf = (props) => {
  const names = JSON.parse(localStorage.getItem('jwt')).user.names;
  const surnames = JSON.parse(localStorage.getItem('jwt')).user.surnames;
  const status = JSON.parse(localStorage.getItem('jwt')).user.status;
  const followers = JSON.parse(localStorage.getItem('jwt')).user.followers;
  const following = JSON.parse(localStorage.getItem('jwt')).user.following;
  return (
    <div class="card-profile">
      <div>
        <img className="picture-profile" src={ImgPerfil} alt="img-portada" />
      </div>

      <div class="container-date-profile mt-3">
        <h4>{names} {surnames}</h4>
        <p>{status}</p>
        <p>{props.description}</p>
      </div>
      <Row>
        <Col>
          <h4>{followers} followers</h4>
        </Col>
        <Col>
          <h4>{following} followings</h4>
        </Col>
      </Row>
      <Link to="/profile/edit" className="alert-link">
        <Button color="info" className="edit-profile mt-2">
          Editar Perfil
        </Button>{" "}
      </Link>
    </div>
  );
};

export default ProfileInf;
