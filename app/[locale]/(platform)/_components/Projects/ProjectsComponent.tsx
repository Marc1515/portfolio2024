"use client";

import { useState, useRef } from "react";
import "./ProjectsComponent.scss";
import images from "./ProjectsData";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useScrollReveal } from "../../hooks/useRevealHooks";
import Image from "next/image";
import { ProjectsTypes } from "./Types";

export const ProjectsComponent = ({ translations }: ProjectsTypes) => {
  const { projects_title, projects_intro } = translations;

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const displayedImages = images.slice(startIndex, endIndex);

  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useScrollReveal(
    ".projectsTittleContainer, .projectsTextContainer, .projectsCards__Card, .pagination"
  );

  return (
    <>
      <div className="spacer layer1"></div>
      <section id="projects" className="projectsSection">
        <div className="projectsSectionWrapper">
          <div className="projectsTittleContainer" ref={cardsWrapperRef}>
            <h1 className="projectsTittleContainer__Tittle">
              {projects_title}
            </h1>
          </div>

          <div className="projectsTextContainer">
            <span className="projectsTextContainer__Text">
              {projects_intro}
            </span>
          </div>

          <div className="projectsCards">
            {displayedImages.map((item) => (
              <div key={item.id} className="projectsCards__Card">
                <a href={item.pageURL} target="_blank" rel="noreferrer">
                  <Image src={item.img} alt="" />
                </a>

                <div className="projectsCards__Links">
                  <a href={item.githubURL} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                  <a href={item.pageURL} target="_blank" rel="noreferrer">
                    <AiOutlineLink />
                  </a>
                </div>
                <span className="projectsCards__Name">{item.nombre}</span>
                <div className="projectsCards__TechImg">
                  {item.techBuild.htmlSVG && (
                    <Image src={item.techBuild.htmlSVG} alt="HTML" />
                  )}
                  {item.techBuild.cssSVG && (
                    <Image src={item.techBuild.cssSVG} alt="CSS" />
                  )}
                  {item.techBuild.javaScriptSvg && (
                    <Image
                      src={item.techBuild.javaScriptSvg}
                      alt="JavaScript"
                    />
                  )}
                  {item.techBuild.typeScriptSvg && (
                    <Image
                      src={item.techBuild.typeScriptSvg}
                      alt="TypeScript"
                    />
                  )}
                  {item.techBuild.angularSVG && (
                    <Image src={item.techBuild.angularSVG} alt="Angular" />
                  )}
                  {item.techBuild.reactSVG && (
                    <Image src={item.techBuild.reactSVG} alt="React" />
                  )}
                  {item.techBuild.nextSVG && (
                    <Image src={item.techBuild.nextSVG} alt="Next.js" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(images.length / imagesPerPage)}
                color="secondary"
                page={currentPage}
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        </div>
      </section>
    </>
  );
};
