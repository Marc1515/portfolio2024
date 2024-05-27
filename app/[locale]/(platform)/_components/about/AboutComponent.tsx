"use client";

import { AboutTypes } from "./Types";
import { useScrollReveal } from "../../hooks/useRevealHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutComponent.scss";

export const AboutComponent = ({ translations }: AboutTypes) => {
  const { about_title, first_text, second_text } = translations;
  useScrollReveal(
    ".aboutTittleContainer, .textContainer__Text1, .textContainer__Text2, .socialMediaIconsContainer__icon"
  );

  return (
    <>
      <div className="spacer layer1"></div>
      <section id="about" className="aboutSection">
        <div className="aboutSectionWrapper">
          <div className="aboutTittleContainer">
            <h1 className="aboutTittleContainer__Tittle">{about_title}</h1>
          </div>
          <div className="aboutContentWrapper">
            <div className="textContainer">
              <p className="textContainer__Text1">{first_text}</p>
              <p className="textContainer__Text2">{second_text}</p>
            </div>
            <div className="socialMediaIconsContainer">
              <a
                href="https://github.com/Marc1515"
                target="_blank"
                rel="noreferrer"
                className="socialMediaIconsContainer__icon"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/marc_espp/"
                target="_blank"
                rel="noreferrer"
                className="socialMediaIconsContainer__icon"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/marc-espa%C3%B1a-833924141/"
                target="_blank"
                rel="noreferrer"
                className="socialMediaIconsContainer__icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
