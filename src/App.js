import React from 'react';
import './reset.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './pages/Template/Template';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import Home from './pages/Home/Home';
import Counter from './pages/Counter/Counter';

function App() {
  return (
      <BrowserRouter>
        <Template>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/menu" element={<Menu name="홍길동" location="경기도 안양시 동안구 엘에스로91번길 16-39, 801호" />}/>
          <Route path="/order" element={<Order store="고양이카페[안양IT밸리점]"/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/counter" element={<Counter />}/>
        </Routes>
        </Template>
      </BrowserRouter>
  );
}

export default App;
