import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilmItem from "../../components/FilmItem";

import find from "./img/find.svg";
import film_1 from "./img/film_1.png";
import search from "./img/search.svg";

import "./index.css";

export default function Main() {
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isShowMore, setShowMore ] = useState(false);

  const filmsLength = 14;

  const toggleShortFilm = () => {
    setIsShortFilm(!isShortFilm);
  };

  const showMore = () => {
    setShowMore(!isShowMore);
  }

  const films = [
    {
      title: "33 слова о дизайне",
      hours: "1",
      minute: "47",
      preview: film_1,
      saved: false
    }
  ];

  return (
    <>
      <Header />
      <div className="films">
        <div className="films__search">
          <div className="films__search__container">
            <img
              className="search__ico"
              src={search}
              alt=""
            />
            <input
              type="tex"
              placeholder="Фильм"
            />
            <img
              className="find__ico"
              src={find}
              alt=""
            />
          </div>
          <div className="films__search__toggle">
            <div
              className={`toggle ${isShortFilm ? "toggle-active" : ""}`}
              onClick={toggleShortFilm}
            >
              <div
                className={`dot ${isShortFilm ? "dot-active" : ""}`}
              />
            </div>
            <p>
              Короткометражки
            </p>
          </div>
        </div>
        <>
          <div className={`film__list ${isShowMore ? "film__list-active" : ""}`}>
            {Array.from({ length: filmsLength }).map((_, index) => (
              <FilmItem
                key={index}
                title={films[0].title}
                hours={films[0].hours}
                minute={films[0].minute}
                preview={films[0].preview}
              />
            ))}
          </div>
          {filmsLength > 12 && (
            <p
              className={`films__list__moreBtn-more ${isShowMore ? "films__list__moreBtn-more-hide" : ""}`}
              onClick={showMore}
            >
              Ещё
            </p>
          )}
        </>
      </div>
      <Footer />
    </>
  );
}