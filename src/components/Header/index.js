import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import logo from "./img/logo.svg"
import user from "./img/user.svg"
import burger from "./img/burger.svg"

import "./index.css";

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();

  const isMainPath = location.pathname === "/main";

  return (
    <header className={`header ${isMainPath ? "header-main" : ""}`}>
      <div className="header__container">
        <img
          className="header__logo"
          src={logo}
          alt=""
          onClick={() => navigate("/")}
        />
        <nav className={`header__nav ${isMainPath ? "header__nav-main" : ""}`}>
        <p onClick={() => navigate("/main")}>
            Фильмы
          </p>
          <p onClick={() => navigate("/main")}>
            Сохранённые фильмы
          </p>
        </nav>
        <div className={`header__account ${isMainPath ? "header__account-main" : ""}`}>
        <p href="">
            Аккаунт
          </p>
          <button>
            <img src={user} alt=""/>
          </button>
        </div>
        <div className="header__burgerBtn">
          <img src={burger} alt=""/>
        </div>
      </div>
    </header>
  );
}