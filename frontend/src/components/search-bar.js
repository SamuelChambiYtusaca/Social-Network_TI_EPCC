import React from "react";
import "./styles/search-bar.css";

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
            placeholder="Realiza tu busqueda aca"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
