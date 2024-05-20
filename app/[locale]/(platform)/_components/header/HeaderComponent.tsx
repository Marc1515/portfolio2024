"use client";

import { useEffect, useState } from "react";
import { useMenuContext } from "../../context/MenuContext";
import BurguerButtonComponent from "./burguerButton/BurguerButtonComponent";
import NavbarComponent from "./Navbar/NavbarComponent";
import "./HeaderComponent.scss";
import { useInitReveal } from "../../hooks/useRevealHooks";

export const HeaderComponent: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { toggleMenu, navbarOpen } = useMenuContext();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [navbarOpen]);

  useInitReveal(".burguerButton, .header");

  return (
    <>
      {windowWidth < 767 && (
        <div className="burguerButton">
          <BurguerButtonComponent />
        </div>
      )}
      <header className={`header ${navbarOpen ? "" : "header--hidden"}`}>
        <NavbarComponent />
      </header>
    </>
  );
};

export default HeaderComponent;
