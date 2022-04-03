import React from "react";
import './Rectangle.css';
import noimage from '../../assets/noimage.png';

function Rectangle(props) {
    return (
        <div className="rectangle_wrap">
            <div className="rectangle">
                <div className="rectangle_img">
                    {props.img == null || props.img == '' ? alert(props.text + ' 이미지 없음') : <img src={props.img}/>}
                    { props.isNotice && props.num > 0 ? <span>{props.num <= 3 ? props.num : '+'}</span> : null }
                </div>
            </div>
            <span>{props.text}</span>
        </div>
    );
}

export default Rectangle;