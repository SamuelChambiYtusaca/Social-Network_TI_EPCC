import React from "react";
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import { Alert, Row, Col } from "reactstrap";

// import home from "../img/home.svg";
import "./styles/contact.css";

import mail from "../img/mail.svg";
import fb from "../img/fb.svg";
import github from "../img/github.svg";

const Contact = (props) => {
  return (
    // <div card>
    //   <Card>
    //     <CardImg src={props.img} alt="Card image cap" width="10px"/>
    //     <CardBody>
    //       <CardTitle tag="h5">{props.name}</CardTitle>
    //       <CardSubtitle tag="h6" className="mb-2 text-muted">{props.area}</CardSubtitle>
    //       <CardText>{props.description}</CardText>
    //     </CardBody>
    //   </Card>
    // </div>
    <div class="card">
      <div>
        <img className="picture" src={props.img} alt="img-portada" />
      </div>

      <div class="container-date">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.area}</p>
        <p>{props.description}</p>
      </div>
      
      <div class="container-aux">
        <img className="aux" src={mail} alt="Mail" />
        <img className="aux" src={fb} alt="fb" />
        <img className="aux" src={github} alt="github" />
      </div>
    </div>
  );
};

export default Contact;
