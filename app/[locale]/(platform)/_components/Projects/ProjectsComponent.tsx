"use client";

import { useState, useRef } from "react";
import "./ProjectsComponent.scss";
import images from "./ProjectsData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useScrollReveal } from "../../hooks/useRevealHooks";
import { ProjectsTypes } from "./Types";
import { ProjectsCardComponent } from "./ProjectsCard/ProjectsCardComponent";
import { SwitchButtonProvider } from "../../context/SwitchButtonContext";

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
    <SwitchButtonProvider>
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
              <ProjectsCardComponent key={item.id} item={item} />
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
    </SwitchButtonProvider>
  );
};
