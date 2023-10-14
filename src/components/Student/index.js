import React from "react";

import SectionTitle from "../SectionTitle";

import student from "./img/student.png"
import arrow from "./img/arrow.png"

import "./index.css";

export default function Student() {

  const portfolioLinks = [
    {
      title: "Статичный сайт",
      link: ""
    },
    {
      title: "Адаптивный сайт",
      link: ""
    },
    {
      title: "Одностраничное приложение",
      link: ""
    },
  ];

  return (
    <section className="student">
      <div className="student__container">
        <SectionTitle title="Студент" />
        <div>
          <div className="student__info">
            <div className="student__info__main">
              <div>
                <p className="name">
                  Виталий
                </p>
                <p className="profession">
                  Фронтенд-разработчик, 30 лет
                </p>
                <p className="description">
                  Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
              </div>
              <a href="">
                Github
              </a>
            </div>
            <img src={student} alt=""/>
          </div>
          <div className="student__portfolio">
            <p className="student__portfolio__title">
              Портфолио
            </p>
            <div className="student__portfolio__links">
              {portfolioLinks.map(({ title, link }, index) => (
                <a
                  className="link"
                  href={link}
                  key={index}
                >
                  <p>
                    {title}
                  </p>
                  <img src={arrow} alt=""/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}