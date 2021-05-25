import React from "react";
import "./styles/body.css";

class Body extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="body-form">
            <div className="body-form__item">
              <p className="textoh3">Usuario:</p>
              <div className="body-form__item-box">
                <input
                  className="body-form__item-input"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                />
              </div>
            </div>
            <div className="body-form__item">
              <p className="textoh3">Contraseña:</p>
              <div className="body-form__item-box">
                <input
                  className="body-form__item-input"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </div>
            <button type="submit" className="body-form__boton">
              <p className="textoh3" id="hover">
                Iniciar
              </p>
            </button>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default Body;
