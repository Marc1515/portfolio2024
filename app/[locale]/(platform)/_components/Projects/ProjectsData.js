import initTranslations from "@/app/i18n"; // Asegúrate de que la ruta es correcta
import learrnAppImg from "./../../assets/img/learrnApp.png";
import trailersAppImg from "./../../assets/img/trailersApp.png";
import weatherAppImg from "./../../assets/img/weatherApp.png";
import gifsAppImg from "./../../assets/img/gifsApp.png";
import countriesApp from "./../../assets/img/countriesApp.png";
import trelloApp from "./../../assets/img/trelloApp.png";

import htmlSvgIMG from "./../../assets/img/techSVG/html5-color.svg";
import cssSvgIMG from "./../../assets/img/techSVG/css3-color.svg";
import angularSvgIMG from "./../../assets/img/techSVG/angular-color.svg";
import reactSvgIMG from "./../../assets/img/techSVG/react-color.svg";
import nextSvgIMG from "./../../assets/img/techSVG/nextjs-color.svg";
import javaScriptSvgIMG from "./../../assets/img/techSVG/javascript-color.svg";
import typeScriptSvgIMG from "./../../assets/img/techSVG/typescript-color.svg";

export const getPortfolioQuestions = async (locale) => {
  const { t } = await initTranslations(locale, ["default"]);

  return [
    {
      id: 1,
      nombre: "Trello App",
      githubURL: "https://github.com/Marc1515/trello-app",
      pageURL: "https://trello.marcespana.com/",
      img: trelloApp,
      projectText1: t("projects_trello_text1"),
      projectText2: t("projects_trello_text2"),
      projectText3: t("projects_trello_text3"),
      techBuild: {
        nextSVG: nextSvgIMG,
        htmlSVG: htmlSvgIMG,
        cssSVG: cssSvgIMG,
        typeScriptSvg: typeScriptSvgIMG,
      },
    },
    {
      id: 2,
      nombre: "Country App",
      githubURL: "https://github.com/Marc1515/CountriesApp",
      pageURL: "https://countries.marcespana.com/",
      img: countriesApp,
      projectText1: t("projects_country_text1"),
      projectText2: t("projects_country_text2"),
      techBuild: {
        angularSVG: angularSvgIMG,
        htmlSVG: htmlSvgIMG,
        cssSVG: cssSvgIMG,
        typeScriptSvg: typeScriptSvgIMG,
      },
    },
    {
      id: 3,
      nombre: "Gifs App",
      githubURL: "https://github.com/Marc1515/gifs-app",
      pageURL: "https://gifs.marcespana.com",
      img: gifsAppImg,
      projectText1: t("projects_gifs_text1"),
      projectText2: t("projects_gifs_text2"),
      techBuild: {
        angularSVG: angularSvgIMG,
        htmlSVG: htmlSvgIMG,
        cssSVG: cssSvgIMG,
        typeScriptSvg: typeScriptSvgIMG,
      },
    },
    {
      id: 4,
      nombre: "Learn App",
      githubURL: "https://github.com/Marc1515/learn-english",
      pageURL: "https://learn.marcespana.com",
      img: learrnAppImg,
      projectText1: t("projects_learn_text1"),
      projectText2: t("projects_learn_text2"),
      projectText3: t("projects_learn_text3"),
      techBuild: {
        htmlSVG: htmlSvgIMG,
        cssSVG: cssSvgIMG,
        reactSVG: reactSvgIMG,
        javaScriptSvg: javaScriptSvgIMG,
      },
    },
    {
      id: 5,
      nombre: "Trailers App",
      githubURL: "https://github.com/Marc1515/movieapp-youtube",
      pageURL: "https://trailer.marcespana.com",
      img: trailersAppImg,
      projectText1: t("projects_trailers_text1"),
      projectText2: t("projects_trailers_text2"),
      techBuild: {
        htmlSVG: htmlSvgIMG,
        cssSVG: cssSvgIMG,
        reactSVG: reactSvgIMG,
        javaScriptSvg: javaScriptSvgIMG,
      },
    },
    {
      id: 6,
      nombre: "Weather App",
      githubURL: "https://github.com/Marc1515/openweather",
      pageURL: "https://weather.marcespana.com",
      img: weatherAppImg,
      projectText1: t("projects_weather_text1"),
      projectText2: t("projects_weather_text2"),
      techBuild: {
        htmlSVG: htmlSvgIMG,
        cssSVG: cssSvgIMG,
        reactSVG: reactSvgIMG,
        javaScriptSvg: javaScriptSvgIMG,
      },
    },
  ];
};
