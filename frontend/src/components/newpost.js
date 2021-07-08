import React from "react";
// import { Link, Redirect } from "react-router-dom";
import { FormText, Button, Input } from "reactstrap";
// import { Button } from 'reactstrap';
import "./styles/post.css";
import ImgPerfil from "../img/perfil.svg";

class NewPost extends React.Component {
  render() {
    const { author } = this.props;
    return (
      <div className="facebook-thumbnail mt-2 mb-3">
        <div className="facebook-card-pub">
          <div className="facebook-card-head mt-2">
            <img className="facebook-card-user-image" src={ImgPerfil} />
            <a className="facebook-user-name" href="">
              {author}
            </a>
          </div>
          <div className="facebook-content mt-3">
            <input
              onChange={this.props.onChangeLabels}
              value={this.props.labels}
              className="input-text ms-2"
              placeholder="Tags"
            />
          </div>

          <div className="facebook-content mt-2">
            <div className="facebook-down-post">
              <input
                onChange={this.props.onChangeTitle}
                value={this.props.title}
                className="text-content-down input-text sub"
                placeholder="Título"
              />
              <textarea
                onChange={this.props.onChangeDescription}
                value={this.props.description}
                className="input-text sub"
                aria-invalid="false"
                placeholder="Inserta una descripción aquí"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="facebook-content mt-2">
            <div>
              <div className="mt-2 mb-1">
                <FormText className="ms-2" color="muted">
                  Si deseas puedes subir una imagen o artículo en pdf :D
                </FormText>
              </div>
              <Input
                className="ms-2 me-3 mb-2"
                type="file"
                name="file"
                id="file"
              />
            </div>
          </div>
          <div>
            <Button type="submit" 
                  onClick={this.props.onClick} className="edit-profile mt-2 center" color="primary">
              Publicar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
