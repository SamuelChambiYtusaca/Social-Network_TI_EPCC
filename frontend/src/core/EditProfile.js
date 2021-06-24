import React, { useState } from "react";
import { signin, authenticate, isAuthenticated } from "./apiCore";
import { Alert, Row, Col, Nav } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import "./styles/Login.css";
import NavBar from "../components/nav-bar";
import SearchBar from "../components/search-bar";
import ProfileInf from "../components/profile";

const EditProfile = (req, res) => {
  return (
    <div>
      <Row className="section-start">
        <Col xs="4" className="ProfileInf">
          <ProfileInf />
        </Col>
        <Col>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col className="mt-4 ms-5 d-inline-flex p-2 bd-highlight">
              <form>
                <div className="mt-3">
                  <label className="etiqueta">Nombres</label>
                  <input
                    className="input_caja mt-1"
                    id="correo"
                    required
                    placeholder="Ingresa tu nombre aquí"
                  />
                </div>
                <div className="mt-3">
                  <label className="etiqueta">Apellidos</label>
                  <input
                    className="input_caja mt-1"
                    id="correo"
                    required
                    placeholder="Ingresa tu apellido aquí"
                  />
                </div>
                <div className="mt-3">
                  <label for="contrasena" className="etiqueta">
                    Contraseña Actual
                  </label>
                  <input
                    type="password"
                    className="input_caja mt-1"
                    id="contrasena"
                    required
                    placeholder="●●●●●●●●●●"
                  />
                </div>
                <div className="mt-3">
                  <label for="contrasena" className="etiqueta">
                    Contraseña Actualizada
                  </label>
                  <input
                    type="password"
                    className="input_caja mt-1"
                    id="contrasena"
                    required
                    placeholder="●●●●●●●●●●"
                  />
                </div>
                <div className="mt-4">
                  <Link to="/profile" className="alert-link">
                    <Button color="info" className="edit-profile">
                      Editar Perfil
                    </Button>{" "}
                  </Link>
                  <Link to="/profile" className="alert-link">
                    <Button color="info" className="edit-profile">
                      Cancelar
                    </Button>{" "}
                  </Link>
                </div>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;
