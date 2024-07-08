export interface TechBuild {
  nextSVG?: string;
  htmlSVG?: string;
  cssSVG?: string;
  typeScriptSvg?: string;
  angularSVG?: string;
  reactSVG?: string;
  javaScriptSvg?: string;
}

export interface Project {
  id: number;
  nombre: string;
  githubURL: string;
  pageURL: string;
  img: any; // Cambiar StaticImageData a any
  projectText: string;
  techBuild: TechBuild;
}

export interface ProjectsTypes {
  translations: {
    projects_title: string;
    projects_intro: string;
    // Añadir más campos de traducción aquí según sea necesario
  };
}
