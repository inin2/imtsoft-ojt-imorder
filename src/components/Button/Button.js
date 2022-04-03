import React from "react";
import './Button.css';

function Button(props) {
    return (
        <div className="button">
            <a href="" className={props.title}>{props.text}</a>
        </div>
    );
}

export default Button;