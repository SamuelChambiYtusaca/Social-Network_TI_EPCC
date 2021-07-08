import React from "react";
import "./styles/nav-bar.css";

const NavBar = (props) => {
  const { n, select } = props;
  const a = () => {
    if (select === "P") {
      return (
        <nav className="nav-2">
          <a className="nav-2-select" href="">
            {n} Publicaciones
          </a>
          <a href="./A">0 Articulos</a>
          <a href="./F">0 Favoritos</a>
        </nav>
      );
    } else if (select === "A") {
      return (
        <nav className="nav-2">
          <a href=".">
            {n} Publicaciones
          </a>
          <a className="nav-2-select" href="">0 Articulos</a>
          <a href="./F">0 Favoritos</a>
        </nav>
      );
    } else if (select === "F") {
      return (
        <nav className="nav-2">
          <a href="./">
            {n} Publicaciones
          </a>
          <a href="./A">0 Articulos</a>
          <a className="nav-2-select" href="">0 Favoritos</a>
        </nav>
      );
    } else {
      return (
        <nav className="nav-2">
          <a href="http://localhost:3000/profile/">
            {n} Publicaciones
          </a>
          <a href="http://localhost:3000/profile/A">0 Articulos</a>
          <a href="http://localhost:3000/profile/F">0 Favoritos</a>
        </nav>
      );
    }
  };

  return <div className="box-nav-bar">{a()}</div>;
};

export default NavBar;
