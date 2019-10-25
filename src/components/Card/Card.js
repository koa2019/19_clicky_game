import React from "react";
import "./style.css";
// import Img from './marioBrothers7';
// import img from '../../../public/images/marioBrothers7.png';

// const points = () => {
//     const num = {Math.floor(Math.random() * 10) + 1};
// } 

function Card(props) {
    return (
        <div className='card-deck'>

            {/* map each imgArray and display one card with one img in card */}
            {/* {props.results.map(result => ( */}

                <div className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                  }}
                  value={props.points}
                  // data-value={Math.floor(Math.random() * 10) + 1}
                  onClick={props.handleFormSubmit}
                >
                    <div className="card-body"> {props.children} </div>
                </div>
            {/* ))} */}

        </div>
    );
}

export default Card;
