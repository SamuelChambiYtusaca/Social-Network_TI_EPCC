import React, { useState, useEffect } from "react";
import { signin, authenticate, isAuthenticated } from "./apiCore";
import { Alert, Row, Col, Nav } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";
import Auth from "../functions/auth";
import Edit from "../components/edit";
import { apimodifyUser } from "../functions/consultasAPI";

const EditProfile = (req, res) => {
  const email = JSON.parse(localStorage.getItem('jwt')).user.email;
  const [values, setValues] = useState({
    names: "",
    surnames: "",
    password: "",
    newpassword: "",
    photo: "",
    status: "",
    formData: "",
    alert: "Escriba todos sus datos por favor :D",
    alertColor: "info",
    redirectToReferrer: false,
  });

  const { names, surnames, password, newpassword, status, alert, alertColor, photo,
    formData, redirectToReferrer } = values;

    useEffect(() => {
      setValues({ ...values, formData: new FormData() });
    }, []);
  
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set("email", email)
    formData.set(name, value);
    setValues({ ...values, error: false, [name]: value });
    console.log(values)
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    apimodifyUser(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, alertColor:"danger",alert: data.error });
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
      return <Redirect to={`/logout/`} />;
    }
  };

  return (
    <div className="scroll">
      <Auth />
      {redirectUser()}
      <Row>
        <ProfileInf />
        <Col className="section-main">
          <Row>
            <Col>
              <SearchBar
                space="yes"
              />
            </Col>
          </Row>
          <Row className="mt-5"></Row>
          <Row className="mt-5 ms-4 me-3">
              <Edit
                onSubmit={clickSubmit}
                onChangeNames={handleChange("names")}
                onChangeSurnames={handleChange("surnames")}
                onChangePassword={handleChange("password")}
                onChangeNewPassword={handleChange("newpassword")}
                onChangeStatus={handleChange("status")}
                onChangePhoto={handleChange("photo")}
                names={names}
                surnames={surnames}
                password={password}
                newpassword={newpassword}
                status={status}
                alert={alert}
                alertColor={alertColor}
              />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;
