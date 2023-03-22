import React from "react";
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"


const Header = () => {
  return (
    <div className="header">
      <Row className="container" gap={2}>
        <div className="header__logo">
          <img width="74" height="52" src={logo} alt="guitar logo" />
          <div>
            <h1>GuitarShop</h1>
            <p>гитары на любой вкус и цвет</p>
          </div>
        </div>
        <div className="header__cart">
          <div className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <span>3</span>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Header
