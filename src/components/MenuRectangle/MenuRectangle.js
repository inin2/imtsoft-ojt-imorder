// import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './MenuRectangle.css';

function MenuRectangle(props) {

    // const [isRed, setRed] = useState(false);

    // function handleClick(e) {
    //     e.preventDefault();
    //     setRed(true);
    // }

    return (
        <div className={`menuRectangle ${props.isRed ? "on" : null }`}>
            <Link to="">
                <img src={`${props.isRed ? props.redImg : props.img }`} />
                <span>{props.text}</span>
            </Link>
        </div>
    );
}

export default MenuRectangle;