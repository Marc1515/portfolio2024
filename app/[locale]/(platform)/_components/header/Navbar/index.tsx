"use client";

import { useEffect, useState, useRef } from "react";
import { useMenuContext } from "../../../context/MenuContext";
import { LanguageButton } from "./LanguageButton/LanguageButton";
import Link from "next/link";
import "./NavbarComponent.scss";

export const NavbarComponent: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0); // Referencia para almacenar la última posición de scroll
  const lastAppliedScrollY = useRef(0); // Nueva referencia para la última posición de scroll donde se aplicó la clase

  const { toggleMenu } = useMenuContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const widthScreen = window.screen.width;
    if (widthScreen < 992) {
      toggleMenu();
    }
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll === 0) {
      setIsScrolled(false);
    }

    // Comprobar si se ha desplazado hacia abajo y ha pasado de 100px
    if (currentScroll > lastScrollY.current && currentScroll > 100) {
      setIsScrolled(true);
      lastAppliedScrollY.current = currentScroll; // Actualizar la última posición de scroll donde se aplicó la clase
    }
    // Comprobar si se está desplazando hacia arriba y ha pasado 100px desde la última aplicación
    else if (
      currentScroll < lastScrollY.current &&
      lastAppliedScrollY.current - currentScroll > 400
    ) {
      setIsScrolled(false);
    }

    // Actualizar la última posición de scroll
    lastScrollY.current = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <LanguageButton />
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link
            href="#marc"
            onClick={handleClick}
            className={`navbar__link ${activeLink === "marc" ? "active" : ""}`}
          >
            Marc<span className="navbar__underline"></span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            href="#about"
            onClick={handleClick}
            className={`navbar__link ${activeLink === "about" ? "active" : ""}`}
          >
            About Me<span className="navbar__underline"></span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            href="#technologies"
            onClick={handleClick}
            className={`navbar__link ${
              activeLink === "technologies" ? "active" : ""
            }`}
          >
            Technologies<span className="navbar__underline"></span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            href="#projects"
            onClick={handleClick}
            className={`navbar__link ${
              activeLink === "projects" ? "active" : ""
            }`}
          >
            Projects<span className="navbar__underline"></span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            href="#contact"
            onClick={handleClick}
            className={`navbar__link ${
              activeLink === "contact" ? "active" : ""
            }`}
          >
            Contact<span className="navbar__underline"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
