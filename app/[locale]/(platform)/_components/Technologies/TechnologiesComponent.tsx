"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import TechImages from "./TechnologiesData";
import "./TechnologiesComponent.scss";
import { useScrollReveal } from "../../hooks/useRevealHooks";
import Image from "next/image";
import { TechnologiesTypes } from "./Types";

const TechnologiesComponent = ({ translations }: TechnologiesTypes) => {
  const {
    technologies_title,
    technologies_intro,
    technologies_basic_title,
    technologies_htmlCssJs_explanation,
    technologies_cssLibraries_title,
    technologies_tailwindBootstrap_explanation,
    technologies_Pre_Processors_title,
    technologies_sassLess_explanation,
    technologies_typescriptRxjs_explanation,
    technologies_reactAngular_explanation,
    technologies_wordpressWoocommerce_explanation,
  } = translations;

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section: any) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  useScrollReveal(
    ".technologiesTittleContainer, .technologiesTextContainer, .TechCard"
  );

  return (
    <>
      {<div className="spacer layer2"></div>}
      <section id="technologies" className="technologiesSection">
        <div className="technologieSectionWrapper">
          <div className="technologiesTittleContainer">
            <h1 className="technologiesTittleContainer__Tittle">
              {technologies_title}
            </h1>
          </div>

          <div className="technologiesTextContainer">
            <span className="technologiesTittleContainer__Text">
              {technologies_intro}
            </span>
          </div>
          <div className="TechCardsWrapper">
            {/* Basic Technologies */}
            <div className="TechCard">
              <span className="TechCard__Tittle">
                {technologies_basic_title}
              </span>
              <div className="TechCard__WrapperImgs">
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.htmlSVG}
                  alt="html_img"
                />
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.cssSVG}
                  alt="css_img"
                />
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.javaScriptSvg}
                  alt="javaScript_img"
                />
              </div>
              <div
                className={`TechCard__DropDown ${
                  openSection === "BT" ? "open" : ""
                }`}
                onClick={() => toggleSection("BT")}
              >
                <div className="TechCard__DropDownTittle">
                  <span className="summary">HTML, CSS y JavaScript</span>
                  <span className="TechCard__ArrowIcon">
                    {openSection === "BT" ? <FiChevronDown /> : <FiChevronUp />}
                  </span>
                </div>
                <div className="TechCard__Text">
                  {technologies_htmlCssJs_explanation}
                </div>
              </div>
            </div>
            {/* Basic Technologies */}
            {/* CSS Libraries */}
            <div className="TechCard">
              <span className="TechCard__Tittle">
                {technologies_cssLibraries_title}
              </span>
              <div className="TechCard__WrapperImgs">
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.bootstrapSVG}
                  alt="bootstrap_img"
                />
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.tailwindSvg}
                  alt="tailwind_img"
                />
              </div>
              <div
                className={`TechCard__DropDown ${
                  openSection === "CSST" ? "open" : ""
                }`}
                onClick={() => toggleSection("CSST")}
              >
                <div className="TechCard__DropDownTittle">
                  <span className="summary">Bootstrap & Taildwind</span>
                  <span className="TechCard__ArrowIcon">
                    {openSection === "CSST" ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronUp />
                    )}
                  </span>
                </div>
                <div className="TechCard__Text">
                  {technologies_tailwindBootstrap_explanation}
                </div>
              </div>
            </div>
            {/* CSS Libraries */}
            {/* Pre-Processors */}
            <div className="TechCard">
              <span className="TechCard__Tittle">
                {technologies_Pre_Processors_title}
              </span>
              <div className="TechCard__WrapperImgs">
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.sassSVG}
                  alt="sass_img"
                />
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.lessSvg}
                  alt="less_img"
                />
              </div>
              <div
                className={`TechCard__DropDown ${
                  openSection === "TPT" ? "open" : ""
                }`}
                onClick={() => toggleSection("TPT")}
              >
                <div className="TechCard__DropDownTittle">
                  <span className="summary">SASS & LESS</span>
                  <span className="TechCard__ArrowIcon">
                    {openSection === "TPT" ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronUp />
                    )}
                  </span>
                </div>
                <div className="TechCard__Text">
                  {technologies_sassLess_explanation}
                </div>
              </div>
            </div>
            {/* Pre-Processors */}
            {/* TypeScript & RxJS */}
            <div className="TechCard">
              <span className="TechCard__Tittle">Superset & RxJS</span>
              <div className="TechCard__WrapperImgs">
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.typeScriptSvg}
                  alt="react_img"
                />
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.rxjsSvg}
                  alt="angular_img"
                />
              </div>
              <div
                className={`TechCard__DropDown ${
                  openSection === "SRT" ? "open" : ""
                }`}
                onClick={() => toggleSection("SRT")}
              >
                <div className="TechCard__DropDownTittle">
                  <span className="summary">TypeScript & RxJS</span>
                  <span className="TechCard__ArrowIcon">
                    {openSection === "SRT" ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronUp />
                    )}
                  </span>
                </div>
                <div className="TechCard__Text">
                  {technologies_typescriptRxjs_explanation}
                </div>
              </div>
            </div>
            {/* TypeScript & RxJS */}
            {/* Frameworks */}
            <div className="TechCard">
              <span className="TechCard__Tittle">Frameworks</span>
              <div className="TechCard__WrapperImgs">
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.reactSVG}
                  alt="react_img"
                />
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.angularSVG}
                  alt="angular_img"
                />
              </div>
              <div
                className={`TechCard__DropDown ${
                  openSection === "FT" ? "open" : ""
                }`}
                onClick={() => toggleSection("FT")}
              >
                <div className="TechCard__DropDownTittle">
                  <span className="summary">React & Angular</span>
                  <span className="TechCard__ArrowIcon">
                    {openSection === "FT" ? <FiChevronDown /> : <FiChevronUp />}
                  </span>
                </div>
                <div className="TechCard__Text">
                  {technologies_reactAngular_explanation}
                </div>
              </div>
            </div>
            {/* Frameworks */}
            {/* CMS */}
            <div className="TechCard">
              <span className="TechCard__Tittle">CMS</span>
              <div className="TechCard__WrapperImgs">
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.wordpressSVG}
                  alt="wordpress_img"
                />
                <Image
                  className="TechCard__Img"
                  src={TechImages.techBuild.wooCommerceSVG}
                  alt="wooCommerce_img"
                />
              </div>
              <div
                className={`TechCard__DropDown ${
                  openSection === "CT" ? "open" : ""
                }`}
                onClick={() => toggleSection("CT")}
              >
                <div className="TechCard__DropDownTittle">
                  <span className="summary">Wordpress & WooCommerce</span>
                  <span className="TechCard__ArrowIcon">
                    {openSection === "CT" ? <FiChevronDown /> : <FiChevronUp />}
                  </span>
                </div>
                <div className="TechCard__Text">
                  {technologies_wordpressWoocommerce_explanation}
                </div>
              </div>
            </div>
            {/* CMS */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesComponent;
