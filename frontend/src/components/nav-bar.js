import React from "react";
import "./styles/nav-bar.css";

class NavBar extends React.Component {
  render() {
    const { n } = this.props;
    return (
      <div className="box">
        <nav className="nav-2">
          <a href="">{n} Publicaciones</a>
          <a href="">1 Articulos</a>
          <a href="">1 Favoritos</a>
          {/* <a href="">...</a> */}
        </nav>
      </div>
    );
  }
}

export default NavBar;
