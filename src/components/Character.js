import React from "react";

function Character(props) {
  return (
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} value={props.score}/>
        );
}

export default Character;
