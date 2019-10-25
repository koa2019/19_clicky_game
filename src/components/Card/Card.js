import React from "react";
import "./style.css";
// import Img from './marioBrothers7';
// import img from '../../../public/images/marioBrothers7.png';

function Card(props) {
    return (
        <div className='card-deck'>
            <div className="card">
                <div className="card-body"> {props.children} </div>
            </div>
        </div>
    );
}

export default Card;
