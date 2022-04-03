import React from "react";
import './Login.css'

function Login()  {
    return (
        <div className="container">
            <img src={require("../../assets/BI_500px.png")} className="logo"/>
            <div className="login_wrap">
                <form>
                    <input type="text" placeholder="아이디입력" />
                    <input type="password" placeholder="비밀번호입력" />
                    <button className="loginBtn">로그인</button>
                </form>
                <div className="util_wrap">
                    <div className="find_wrap">
                        <a href="#">아이디 찾기</a>
                        <a href="#">비밀번호 찾기</a>
                    </div>
                    <div className="check_wrap">
                        <input type="checkbox" id="remeber-id"/>
                        <label for="remeber-id">아이디 저장</label>
                        <input type="checkbox" id="auto-login"/>
                        <label for="auto-login">자동 로그인</label>
                    </div>
                </div>
            </div>
            <div className="join_wrap">
                <p>처음이신가요?</p>
                <p>
                    밀썹은 회원전용 식사 관리서비스입니다.<br/>
                    회원가입을 하셔야 서비스를 이용하실 수 있습니다.
                </p>
                <a href="#" className="joinBtn">아임오더 회원가입하기</a>
            </div>
            <div className="bottom_wrap">
                <p>IMTSOFT ORDER SERVICE</p>
                <p>imtsoft all rights reserved</p>
            </div>
        </div>
    );
}

export default Login;