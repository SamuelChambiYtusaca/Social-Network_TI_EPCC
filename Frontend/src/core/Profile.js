import React, { useState, useEffect, useRef } from "react";
import { Alert, Container, Row, Col, Button } from "reactstrap";
import "./styles/general.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";
import Post from "../components/post";
import NewPost from "../components/newpost";
import Auth from "../functions/auth";
import { apigetPublicationsByUser, getId } from "../functions/consultasAPI";

const Profile = (props) => {

  const [post, setPost] = useState([]);
  const id = getId();

  const posts = () => {
    apigetPublicationsByUser(id).then((data) => {
      setPost(data);
    });
  };

  useEffect(() => {
    posts();
  }, []);

  const cards = () => {
    let postcards;
    postcards = [];
    if (post.length !== 0) {
      post.forEach((a) => {
        console.log(a);
        let e = `${a.author.names} ${a.author.surnames}`;
        let i = "";
        a.labels.forEach((u) => {
          i = `${i} ${u}`;
        });
        let ok = 0;
        a.likes.forEach((oki) => {
          ok = ok + 1;
        });
        let o = (
          <Post
            id={id}
            idPost={a._id}
            title={a.title}
            description={a.description}
            author={e}
            authorId={a.author._id}
            tags={i}
            userok={ok}
          />
        );
        postcards.push(o);
      });
    }
    console.log(postcards);
    return postcards;
  };

  const nposts = () => {
    let n = 0;
    if (post.length !==0) {
      post.forEach((a) => {
        n = n + 1;
      });
    }
    return n;
  };

  return (
    <div>
      <Auth />
      <Row className="all-container">
        <ProfileInf />
        <Col className="section-main">
          <Row>
              <SearchBar
                space="yes"
              />
          </Row>
          <Row className="mt-4"></Row>
          <Col className="section-main">
          <Row className="mt-5">
            <Col className="me-2 ms-2">
              <NavBar
                select="P"
                n={nposts()}
              />
            </Col>
          </Row>
          <Row>
            <Button className="margin-sides-20px center button-newpost mt-2 mb-2" href="./newpost">Crear nueva publicación</Button>
            {cards()}
          </Row>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
