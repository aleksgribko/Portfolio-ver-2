import React from "react";
import "../css/photo.css";

export default function Photo(props) {

	return (
		<img
			id="photoOfMe"			
			src={require("./../materials/IMG_5310.jpg")}
			alt='me'
		/>
	);
}
