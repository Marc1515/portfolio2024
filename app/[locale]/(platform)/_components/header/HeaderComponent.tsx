"use client";

import { useEffect, useState } from "react";
import { useMenuContext } from "../../context/MenuContext";
import { BurguerButtonComponent } from "./burguerButton/BurguerButtonComponent";
import { NavbarComponent } from "./Navbar/NavbarComponent";
import "./HeaderComponent.scss";
import { HeaderTypes } from "./Types";
import { LanguageButton } from "./Navbar/LanguageButton/LanguageButton";

export const HeaderComponent = ({ translations }: HeaderTypes) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { navbarOpen, showLanguageButton, setShowLanguageButton } =
    useMenuContext();

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowLanguageButton(false);
      } else {
        setShowLanguageButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowLanguageButton]);

  return (
    <>
      <div className="burguerButton">
        <LanguageButton show={showLanguageButton} />
      </div>
      {windowWidth < 767 && (
        <div className="burguerButton">
          <BurguerButtonComponent />
        </div>
      )}
      <header className={`header ${navbarOpen ? "" : "header--hidden"}`}>
        <NavbarComponent translations={translations} />
      </header>
    </>
  );
};
