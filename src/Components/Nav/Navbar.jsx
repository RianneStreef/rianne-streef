import React, { useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";

import "../../styles/global.css";

const Nav = styled.nav`
  min-height: 55px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
`;

const opacity = 0.1;
let navbar;

const Navbar = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        navbar = document.getElementById("navbar");
        const y = 1 + (window.scrollY || window.pageYOffset);
        const o = (opacity + y) / 800;
        navbar.style.backgroundColor = `rgb(211, 19, 118, ${o} `;
      }
    });
  });

  let { language, setLanguage } = props;
  return (
    <Nav id="navbar">
      <Burger language={language} setLanguage={setLanguage} />
    </Nav>
  );
};

export default Navbar;
