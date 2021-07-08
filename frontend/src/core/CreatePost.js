import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "./apiCore";
import { Alert, Container, Row, Col, Button } from "reactstrap";
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";
import Post from "../components/post";
import NewPost from "../components/newpost";
import Auth from "../functions/auth";
import { apicreatePost, apigetPublications } from "../functions/consultasAPI";

const CreatePost = (props) => {
  const names = JSON.parse(localStorage.getItem('jwt')).user.names;
  const surnames = JSON.parse(localStorage.getItem('jwt')).user.surnames;
  const author = JSON.parse(localStorage.getItem('jwt')).user._id;

  const [post, setPost] = useState([]);
  const [values, setValues] = useState({
    labels: "",
    title: "",
    description: "",
    redirectToReferrer: false,
  });

  const { labels, title, description, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(values)
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    apicreatePost({ title, author, description, labels }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          redirectToReferrer: true,
        });
      }
    })
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to={`/profile/`} />;
    }
  };

  const posts = () => {
    apigetPublications().then((data) => {
      let a = data;
      setPost(a);
    });
  };

  useEffect(() => {
    posts();
  }, []);

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
      {redirectUser()}
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
                n={nposts()}
              />
            </Col>
          </Row>
          <Row
              className="mt-5">
            <NewPost
              onClick={clickSubmit}
              onChangeLabels={handleChange("labels")}
              onChangeTitle={handleChange("title")}
              onChangeDescription={handleChange("description")}
              author={`${names} ${surnames}`}
              labels={labels}
              title={title}
              description={description}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CreatePost;
