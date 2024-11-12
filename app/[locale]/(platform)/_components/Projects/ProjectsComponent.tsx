"use client";

import { useState, useRef, useEffect } from "react";
import "./ProjectsComponent.scss";
import { getPortfolioQuestions } from "./ProjectsData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useScrollReveal } from "../../hooks/useRevealHooks";
import { ProjectsTypes, Project } from "./Types";
import { ProjectsCardComponent } from "./ProjectsCard/ProjectsCardComponent";
import { SwitchButtonProvider } from "../../context/SwitchButtonContext";

interface ProjectsComponentProps extends ProjectsTypes {
  locale: string;
}

export const ProjectsComponent = ({
  translations,
  locale,
}: ProjectsComponentProps) => {
  const { projects_title, projects_intro } = translations;

  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);
  const imagesPerPage = 4;

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getPortfolioQuestions(locale);
      setProjects(projectsData);
    };

    fetchProjects();
  }, [locale]);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const displayedImages = projects.slice(startIndex, endIndex);

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
                count={Math.ceil(projects.length / imagesPerPage)}
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
