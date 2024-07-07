import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { StaticImageData } from "next/image";
import SwitchButtonComponent from "../SwitchButton/SwitchButtonComponent";
import { useSwitchButton } from "../../../context/SwitchButtonContext";
import "./ProjectsCardComponent.scss";
import { useEffect, useState } from "react";

type ProjectsCardProps = {
  item: {
    id: number;
    img: StaticImageData;
    nombre: string;
    githubURL: string;
    pageURL: string;
  };
};

export const ProjectsCardComponent = ({ item }: ProjectsCardProps) => {
  const { flippedIds } = useSwitchButton();
  const isFlipped = flippedIds.has(item.id);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      setIsAnimating(true);
      setIsExpanded(false);

      const timer = setTimeout(() => {
        setIsAnimating(false);
        setIsExpanded(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  return (
    <div className={`projectsCards__Card ${isFlipped ? "flipped" : ""}`}>
      <div className="projectsCards_ImageWrapper">
        <Image src={item.img} alt={item.nombre} />
      </div>
      <div className="inner">
        <div className="projectsCards__FirstSheet">
          <SwitchButtonComponent id={item.id} />
        </div>

        <div
          className={`projectsCards__SecondSheet ${
            isAnimating ? "fadeOut" : ""
          } ${isExpanded ? "fadeOut expanded" : ""}`}
        >
          <div className="projectsCards__NameContainer">
            <span className="projectsCards__Name">{item.nombre}</span>
          </div>
          <div className="projectsCards__Links">
            <a href={item.githubURL} target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
            <a href={item.pageURL} target="_blank" rel="noreferrer">
              <AiOutlineLink />
            </a>
          </div>
        </div>
        <div className="projectsCards__ThirdSheet"></div>
      </div>
    </div>
  );
};
