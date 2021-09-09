import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "../../styles/global.css";

import flagEn from "../../images/icon-en.png";
import flagFr from "../../images/icon-fr.png";

import { Link } from "react-scroll";

import { content } from "../../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  z-index: 10;
  background-color: rgb(211, 19, 118, 0.8);

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    background-color: transparent;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #fff;

    @media (min-width: 768px) {
      a {
        color: #fff;
        transition: color 500ms ease-in;
      }
      a:hover {
        color: var(--color-dark);
        transition: color 500ms ease-in;
      }
      p {
        margin-top: 0;
      }
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
      }
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #494949;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled.p`
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const Dot = styled.span`
  color: #fff;
  display: none;
  font-weight: 800;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
  }
`;

const Flag = styled.img`
  width: 30px;
  margin-right: 20px;
`;

const RightNav = (props) => {
  let { open, setOpen, language, setLanguage } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  const [headerClassName, setHeaderClassName] = useState("");

  const handleScroll = (headerClassName) => {
    if (headerClassName !== "header-background" && window.pageYOffset >= 750) {
      setHeaderClassName("header-background");
    } else if (
      headerClassName === "header-background" &&
      window.pageYOffset < 750
    ) {
      setHeaderClassName("");
    }
  };

  function handleSetLanguage(language) {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  }

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]);

  return (
    <Ul open={open}>
      <li className="menu-item">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <NavLink>{language.menuHome}</NavLink>
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link
          to="about"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <NavLink>{language.menuAbout}</NavLink>
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link to="work" spy={true} smooth={true} onClick={() => setOpen(!open)}>
          <NavLink>{language.menuWork}</NavLink>
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link
          to="skills"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <NavLink>{language.menuSkills}</NavLink>
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <NavLink>{language.menuContact}</NavLink>
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>
      <li>
        {language.language === "english" ? (
          <Flag
            className="language-icon"
            src={flagFr}
            onClick={() => handleSetLanguage("french")}
            alt="Set language to French"
          />
        ) : (
          <Flag
            className="language-icon"
            src={flagEn}
            onClick={() => handleSetLanguage("english")}
            alt="Set language to English"
          />
        )}
      </li>
    </Ul>
  );
};

export default RightNav;
