import React from "react";

function Character(props) {
  return (
    // style={{
    //   backgroundImage: this.image ? `url(${props.image})` : "none"
    // }}
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} value={props.score}/>
        );
}

export default Character;
