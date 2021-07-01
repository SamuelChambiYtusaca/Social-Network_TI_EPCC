import React from "react";
// import { Link, Redirect } from "react-router-dom";
// import { Alert, Row, Col, Nav } from "reactstrap";
// import { Button } from 'reactstrap';
import "./styles/post.css";
import ImgPerfil from "../img/perfil.svg";

const Post = (props) => {
  return (
    <div class="facebook-thumbnail">
      <div class="facebook-card-pub">
        <div class="facebook-card-head">
          <img class="facebook-card-user-image" src={ImgPerfil} />
          <a class="facebook-user-name" href="">
            Jose Leopoldo M.
          </a>
        </div>
        <div class="facebook-text">
          <br></br>
          <p class="text-content">
            (IA) (TMC)
          </p>
        </div>

        <div class="facebook-content">

          <div class="facebook-down-post">
            <p class="text-content-down"> Titulo </p>
            <p class="text-content-info">
              Oportunidad única contrate un backend y obtenga un frontend gratis
              y de regalo una base de datos!
            </p>
          </div>
        </div>
        <div class="facebook-reaction-butoms">
          <div class="butom-like">
            <p class="reactions">198
              <a class="mas-info-2" role="button" href="#">
                <i > Me Gusta</i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;