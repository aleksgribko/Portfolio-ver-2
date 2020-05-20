import React from "react";
import "../sass/photo.scss";

export default function Photo(props) {
  return (
    <img id="photoOfMe" src={require("./../materials/IMG_5310.jpg")} alt="me" />
  );
}
