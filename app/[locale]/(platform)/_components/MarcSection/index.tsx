"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import fotoPerfil from "./../../assets/img/fotoPerfil.png";
import CV from "./../../assets/MEQ_ESP.pdf";
import "./MarcComponent.scss";
import { useInitReveal } from "../../hooks/useRevealHooks";
import Image from "next/image";
import { MarcSectionTypes } from "./Types";

export const MarcSection = ({ translations }: MarcSectionTypes) => {
  const { writerText, cvText } = translations;

  useEffect(() => {
    if (writerText) {
      const options = {
        strings: [writerText],
        typeSpeed: 40,
        backSpeed: 10,
        loop: true,
        showCursor: false, // Opción para ocultar el cursor
      };
      const typed = new Typed("#typed-heading", options);
      return () => {
        typed.destroy();
      };
    }
  }, [writerText]);

  // Usar el hook directamente
  useInitReveal(".marcSection");

  return (
    <>
      <section id="marc" className="marcSection">
        <div className="marcSectionWrapper">
          <div className="imgContainer">
            <Image src={fotoPerfil} alt="" className="imgContainer__Img" />
          </div>
          <div className="marcWrapper">
            <div className="titleContainer">
              <h1 className="titleContainer__FullName">
                <span className="titleContainer__Name">Marc </span>España
              </h1>
            </div>

            <div className="autoTypedContainer">
              <h4 className="autoTypedContainer__Text" id="typed-heading"></h4>
            </div>
            <div className="buttonContainer">
              <button className="buttonContainer__Button">
                <a className="buttonContainer__Link" href={CV} download>
                  {cvText}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarcSection;
