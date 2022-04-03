import React, {useState} from "react";
import './Order.css';
import Food from "../../components/Food/Food";
import MenuRectangle from "../../components/MenuRectangle/MenuRectangle";
import ico_o_home from '../../assets/ico_o_home.png';
import ico_o_whole from '../../assets/ico_o_whole.png';
import ico_o_basket from '../../assets/ico_o_basket.png';
import ico_o_info from '../../assets/ico_o_info.png';
import ico_o_order from '../../assets/ico_o_order.png';
import ico_o_order2 from '../../assets/ico_o_order2.png';
import coffee_img from '../../assets/0001.png';
import btn_close from '../../assets/btn_close.png';
import btn_sch from '../../assets/btn_sch.png';

function Order(props) {
    const coffeeArr = [
        { title: '에스프레소', enTitle: 'Espresso', info: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 향긋한 슈프리모 원두를 느낄 수 있습니다.', price: 5500, img: coffee_img, feature: "BEST" },
        { title: '아몬드 바닐라 아포가토', enTitle: 'Espresso', info: '유기농 바닐라 아이스크림에 에스프레소를 붓고 아몬드로 토핑한 아보가토입니다.', price: 5500, img: coffee_img },
        { title: '카페라떼', enTitle: 'Espresso', info: '에스프레소에 신선한 우유를 곁들인 우유의 부드러움과 향긋한 향을 느낄 수 있습니다.', price: 5500, img: coffee_img, feature: "NEW" },
        { title: '에스프레소', enTitle: 'Espresso', info: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 향긋한 슈프리모 원두를 느낄 수 있습니다.', price: 5500 },
        { title: '에스프레소', enTitle: 'Espresso', info: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 향긋한 슈프리모 원두를 느낄 수 있습니다.', price: 5500 },
        { title: '에스프레소', enTitle: 'Espresso', info: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 향긋한 슈프리모 원두를 느낄 수 있습니다.', price: 5500 },
    ];

    const juiceArr = [
        { title: '주스', enTitle: 'Juice', info: '에스프레소에 신선한 우유를 곁들인 우유의 부드러움과 향긋한 향을 느낄 수 있습니다.', price: 5500, img: coffee_img },
        { title: '주스', enTitle: 'Juice', info: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 향긋한 슈프리모 원두를 느낄 수 있습니다.', price: 5500, img: coffee_img },
        { title: '주스', enTitle: 'Juice', info: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 향긋한 슈프리모 원두를 느낄 수 있습니다.', price: 5500, img: coffee_img },
        { title: '주스', enTitle: 'Juice', info: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 향긋한 슈프리모 원두를 느낄 수 있습니다.', price: 5500 },
    ];

    const menuRectangleArr = [
        { img: ico_o_home, text: "홈"},
        { img: ico_o_basket, text: "장바구니"},
        { img: ico_o_order, redImg: ico_o_order2, text: "주문", isRed: true},
        { img: ico_o_info, text: "매장소식"},
        { img: ico_o_whole, text: "전체메뉴"},
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const categoryArr = [
        {
            title: "커피", 
            content: (
                <div>
                    {coffeeArr.map(v => (<Food title={v.title} img={v.img} enTitle={v.enTitle} info={v.info} price={v.price} feature={v.feature} />))}
                </div>
            )

        },
        {
            title: "주스", 
            content: (
                <div>
                    {juiceArr.map(v => (<Food title={v.title} img={v.img} enTitle={v.enTitle} info={v.info} price={v.price} feature={v.feature} />))}
                </div>
            )

        },
        {
            title: "쿠키", 
            content: (
                <div>
                    쿠키
                </div>
            )

        },
        {
            title: "케익", 
            content: (
                <div>
                    케익
                </div>
            )

        }
    ];

    const tabClickHandler = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className="container">
            <div className="top_area">
                <h3>주문하기</h3>
                <span className="store">{props.store}</span>
                <div>
                    <span className="btn_sch"><img src={btn_sch} /></span>
                    <span className="btn_close"><img src={btn_close} /></span>
                </div>
            </div>
            <div className="menu_filter">
                <ul>
                    {categoryArr.map((section, index) => {
                        return (
                            <li key={index} className={activeIndex === index ? "isActive" : ""} onClick={() => tabClickHandler(index)}>{section.title}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="menu_list">
                {categoryArr[activeIndex].content}
            </div>
            <div className="menu_area">
                {menuRectangleArr.map(v => (<MenuRectangle text={v.text} img={v.img} redImg={v.redImg} isRed={v.isRed}/>))}
            </div>
        </div>
    );
};

export default Order;