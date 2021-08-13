import React from "react";
import { Button, Col, Row, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import ImgPerfil from "../img/perfil.svg";
import "./styles/Form.css";
import "./styles/general.css";

class Edit extends React.Component {
  render() {
    const names = JSON.parse(localStorage.getItem("jwt")).user.names;
    const surnames = JSON.parse(localStorage.getItem("jwt")).user.surnames;
    const status = JSON.parse(localStorage.getItem("jwt")).user.status;
    return (
          <form onSubmit={this.props.onSubmit}>
      <Row>
        <Alert color={`${this.props.alertColor} text-center alert-edit`}>
          {this.props.alert}
        </Alert>
          <Col className="form-edit ms-4 me-3">
            <div className="mb-3">
              <label className="etiqueta-edit">Nombres</label>
              <input
                onChange={this.props.onChangeNames}
                value={this.props.names}
                className="input_caja mt-1"
                type="text"
                placeholder={names}
              />
            </div>
            <div className="mb-3">
              <label className="etiqueta-edit">Apellidos</label>
              <input
                onChange={this.props.onChangeSurnames}
                value={this.props.surnames}
                className="input_caja mt-1"
                type="text"
                placeholder={surnames}
              />
            </div>
            <div className="mb-3">
              <label for="contrasena" className="etiqueta-edit">
                Contraseña Actual
              </label>
              <input
                onChange={this.props.onChangePassword}
                value={this.props.password}
                type="password"
                className="input_caja mt-1"
                id="contrasena"
                placeholder="●●●●●●●●●●"
              />
            </div>
            <div className="mb-4">
              <label for="contrasena" className="etiqueta-edit">
                Contraseña Actualizada
              </label>
              <input
                onChange={this.props.onChangeNewPassword}
                value={this.props.newpassword}
                type="password"
                className="input_caja mt-1"
                id="contrasena"
                placeholder="●●●●●●●●●●"
              />
            </div>
        </Col>
        <Col className="profile-edit">
          <div className="ms-4 me-3">
            <label className="etiqueta-edit">Foto de perfil:</label>
            <img
              className="picture-profile center mb-3 mt-3"
              src={ImgPerfil}
              alt="img-portada"
              />
            <input
                onChange={this.props.onChangePhoto}
                className="ms-2 me-3 mb-2"
                type="file"
                name="photo"
                accept="image/*"
                />
          </div>
          <div className="ms-4 me-3">
            <label for="status" className="etiqueta-edit">
              Estado:
            </label>
            <textarea
              onChange={this.props.onChangeStatus}
              value={this.props.status}
              type="text-area"
              className="input_caja-status mt-1"
              id="status"
              rows="2"
              placeholder={status}
              ></textarea>
          </div>
        </Col>
        <Row>
          <Row className="mb-3 mt-2">
            <Col className="ms-5">
                <Button  type="submit" color="info" className="edit-profile center">
                  Editar
                </Button>
            </Col>
            <Col className="me-5">
              <Link to="/profile/" className="alert-link">
                <Button color="info" className="edit-profile center">
                  Cancelar
                </Button>{" "}
              </Link>
            </Col>
          </Row>
        </Row>
      </Row>
              </form>
    );
  }
}

export default Edit;
