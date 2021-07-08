import React, { useState, useEffect, useRef } from "react";
import { signin, authenticate, isAuthenticated } from "./apiCore";
import { Alert, Container, Row, Col, Nav } from "reactstrap";
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";
import Post from "../components/post";
import NewPost from "../components/newpost";
import Auth from "../functions/auth";
import { apigetPublications } from "../functions/consultasAPI";

const ProfileA = (props) => {
  const names = JSON.parse(localStorage.getItem('jwt')).user.names;
  const surnames = JSON.parse(localStorage.getItem('jwt')).user.surnames;

  const [post, setPost] = useState([]);

  const posts = () => {
    apigetPublications().then((data) => {
      let a = data;
      setPost(a);
    });
  };

  useEffect(() => {
    posts();
  }, []);

  const cards = () => {
    let postcards;
    postcards = [];
    post.forEach((a) => {
      console.log(a);
      let e = `${a.author.names} ${a.author.surnames}`;
      let i = "";
      a.labels.forEach((u) => {
        i = `${i} ${u}`;
      });
      let ok = 0;
      a.userok.forEach((oki) => {
        ok = ok + 1;
      });
      let o = (
        <Post
          title={a.title}
          description={a.description}
          author={e}
          tags={i}
          userok={ok}
        />
      );
      console.log(o);
      postcards.push(o);
    });
    console.log(postcards);
    return postcards;
  };

  const nposts = () => {
    let n = 0;
    post.forEach((a) => {
      n = n + 1;
    });
    return n;
  };

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
              <NavBar
                select="A"
                n={nposts()}
              />
            </Col>
          </Row>
          <Row>
            {/* <Col>{cards()}</Col> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileA;
