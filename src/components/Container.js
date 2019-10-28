import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""} mb-5`}>{props.children}</div>;
}

export default Container;
