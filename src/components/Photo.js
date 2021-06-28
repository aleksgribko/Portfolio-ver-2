import React from "react";
import "../sass/photo.scss";
import imageOfMe from "./../materials/IMG_5310.jpg"

export default function Photo(props) {
  return (
    <img id="photoOfMe" src={imageOfMe} alt="me" />
  );
}
