import React from "react";
import './Menu.css'
import Button from "../../components/Button/Button";
import Rectangle from "../../components/Rectangle/Rectangle";
import MenuRectangle from "../../components/MenuRectangle/MenuRectangle";
import ico_lctn from '../../assets/ico_lctn.png';
import BI_200px from '../../assets/BI_200px.png';
import ico_menu_cat_p_list from '../../assets/ico_menu_cat_p-list.png';
import ico_menu_cat_add_fv from '../../assets/ico_menu_cat_add-fv.png';
import ico_menu_cat_st_fv from '../../assets/ico_menu_cat_st-fv.png';
import ico_menu_cat_nts from '../../assets/ico_menu_cat_nts.png';
import ico_menu_cat_app from '../../assets/ico_menu_cat_app.png';
import ico_menu_cat_s_info from '../../assets/ico_menu_s-info.png';
import ico_o_home from '../../assets/ico_o_home.png';
import ico_o_stsch from '../../assets/ico_o_stsch.png';
import ico_o_whole from '../../assets/ico_o_whole.png';
import ico_o_whole2 from '../../assets/ico_o_whole2.png';

function Menu(props) {
    
    const buttonArr = [
        { text: '내정보', title: 'myinfo' },
        { text: '로그아웃', title: 'logout' }
    ];
    
    const rectangleArr = [
        { img: ico_menu_cat_p_list, text: "주문내역" },
        { img: ico_menu_cat_add_fv, text: "주소 즐겨찾기" },
        { img: ico_menu_cat_st_fv, text: "매장 즐겨찾기" },
        { img: ico_menu_cat_nts, text: "알림", num: 2, isNotice: true },
        { img: ico_menu_cat_app, text: "앱 공지사항", num: 5, isNotice: true },
        { img: ico_menu_cat_s_info, text: "서비스 안내" },
    ];
    
    const menuRectangleArr = [
        { img: ico_o_home, text: "홈", link: "/home"},
        { img: ico_o_stsch, text: "매장찾기"},
        { img: ico_o_whole, redImg: ico_o_whole2, text: "전체메뉴", isRed: true}
    ];

    return (
        <div className="container">
            <div className="user_info">
                <div className="location_wrap">
                    <img src={ico_lctn}/>
                    <span>현재위치 : {props.location}</span>
                </div>

                <p className="userName">{props.name}님</p>
                <p className="greeting">안녕하세요! 즐거운 하루 되세요!</p>
                <div className="userBtn_wrap">
                    {buttonArr.map(v => (<Button text={v.text} title={v.title} />))}
                </div>
            </div>
            <div className="middle_wrap">
                <div className="button_area">
                    {rectangleArr.map(v => (<Rectangle text={v.text} img={v.img} num={v.num} isNotice={v.isNotice} />))}
                </div>
                <img src={BI_200px} />
            </div>
            <div className="footer">
                <span>
                    주식회사 아이엠티소프트<br/>
                    대표 : 김경남.  전화 : 02-1661-9380. 사업자등록번호 : 134-86-21447<br/>
                    소재지 : 경기도 안양시 동안구 엘에스로91번길 16-39 호계동, 안양IT밸리 801호<br/>
                </span>
            </div>
            <div className="menu_area">
                {menuRectangleArr.map(v => (<MenuRectangle text={v.text} img={v.img} redImg={v.redImg} isRed={v.isRed} link={v.link} />))}
            </div>
        </div>
    );
}

export default Menu;