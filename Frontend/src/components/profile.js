import React, { useState, useEffect, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { Alert, Row, Col, Nav } from "reactstrap";
import { Button } from "reactstrap";
import "./styles/profile.css";
import ImgPerfil from "../img/perfil.svg";
import IcnBack from "../img/arrow.svg";
import DOM, { apigetDataUser, getId } from "../functions/consultasAPI";
import API from "../functions/consultasAPI";

const ProfileInf = (props) => {

  const [data, setData] = useState([]);
  const id = getId();

  const dataUser = () => {
    apigetDataUser(id).then((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    dataUser();
  }, []);

  const nfollowers = () => {
    let c = 0;
    for (let o in data.followers) {
      c++;
    }
    return c;
  };

  const nfollowing = () => {
    let c = 0;
    for (let o in data.following) {
      c++;
    }
    return c;
  };

  const Img = () => {
    console.log(id)
    // return `${DOM}/u/photo/${id}`
    return ImgPerfil
  }

  return (
    <div class="card-profile">
      <Link to="/main">
        <img className="icn" src={IcnBack} alt="icn-back" />
      </Link>
      <div>
        <img className="picture-profile" src={Img()} alt="img-portada" />
      </div>

      <div class="container-date-profile mt-3">
        <h4>
          {data.names} {data.surnames}
        </h4>
        <p>{data.status}</p>
        <p>{props.description}</p>
      </div>
      <Row>
        <Col>
          <h4>{nfollowers()} followers</h4>
        </Col>
        <Col>
          <h4>{nfollowing()} followings</h4>
        </Col>
      </Row>
      <Link to="/profile/edit" className="alert-link">
        <Button color="info" className="edit-profile mt-2">
          Editar Perfil
        </Button>
      </Link>
    </div>
  );
};
export default ProfileInf;
