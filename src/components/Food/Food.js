import React from "react";
import './Food.css';
import NumberFormat from 'react-number-format';
import noimage from '../../assets/noimage.png';

function Food(props) {
    return (
        <div className="food">
            <img src={`${props.img == null || props.img == '' ? noimage : props.img }`} />
            <div className="middle_wrap">
                <span className={`feature ${props.feature === "BEST" ? "best" : (props.feature === "NEW" ? "new" : null)}`}>{props.feature}</span>
                <span className="title">{props.title}</span>
                <span className="enTitle">{props.enTitle}</span>
                <span className="info">{props.info}</span>
            </div>

            <span className="price">
                <NumberFormat value={props.price} displayType={'text'} thousandSeparator={true} suffix={'원'} />
            </span>
        </div>
    );
}

export default Food;