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
  const { writer_text, cv_text } = translations;

  useEffect(() => {
    if (writer_text) {
      const options = {
        strings: [writer_text],
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
  }, [writer_text]);

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
                  {cv_text}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
