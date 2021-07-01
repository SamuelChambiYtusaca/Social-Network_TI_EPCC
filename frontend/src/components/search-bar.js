import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./styles/search-bar.css";
import ImgLogout from "../img/logout.svg";
import ImgPerfil from "../img/perfil.svg";
import ImgNotify from "../img/notify.svg";

class SearchBar extends React.Component {
  render() {
    return (
      <div class="box">
        <div class="container-1">
          <span class="icon">
            <i class="fa fa-search"></i>
          </span>
          <input
            type="search"
            id="search"
            placeholder="Realiza tu busqueda aqui"
          />
        </div>
        <div className="container-2">
          {/* <Link to="/newpost" className="alert-link">
            <img className="img-notify" ref="/newpost" src={ImgNotify} />
          </Link> */}
          <img className="img-perfil" ref="/logout" src={ImgPerfil} />
          <Link to="/logout" className="alert-link">
            <img className="img-logout" ref="/logout" src={ImgLogout} />
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
