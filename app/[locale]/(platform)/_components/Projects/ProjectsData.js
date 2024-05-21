import learrnAppImg from './../../assets/img/learrnApp.png';
import trailersAppImg from './../../assets/img/trailersApp.png';
import weatherAppImg from './../../assets/img/weatherApp.png';
import gifsAppImg from './../../assets/img/gifsApp.png';
import countriesApp from './../../assets/img/countriesApp.png';
import trelloApp from './../../assets/img/trelloApp.png';

import htmlSvgIMG from './../../assets/img/techSVG/html5-color.svg';
import cssSvgIMG from './../../assets/img/techSVG/css3-color.svg';
import angularSvgIMG from './../../assets/img/techSVG/angular-color.svg';
import reactSvgIMG from './../../assets/img/techSVG/react-color.svg';
import nextSvgIMG from './../../assets/img/techSVG/nextjs-color.svg';
import javaScriptSvgIMG from './../../assets/img/techSVG/javascript-color.svg';
import typeScriptSvgIMG from './../../assets/img/techSVG/typescript-color.svg';

const PortfolioQuestions = [
	{
		id: 1,
		nombre: 'Trello App',
		githubURL: 'https://github.com/Marc1515/trello-app',
		pageURL: 'https://trello-app-taupe.vercel.app/',
		img: trelloApp,
		techBuild: {
			nextSVG: nextSvgIMG,
			htmlSVG: htmlSvgIMG,
			cssSVG: cssSvgIMG,
			typeScriptSvg: typeScriptSvgIMG,
		},
	},
	{
		id: 2,
		nombre: 'Countries App',
		githubURL: 'https://github.com/Marc1515/CountriesApp',
		pageURL: 'https://countries.marcespana.com/',
		img: countriesApp,
		techBuild: {
			angularSVG: angularSvgIMG,
			htmlSVG: htmlSvgIMG,
			cssSVG: cssSvgIMG,
			typeScriptSvg: typeScriptSvgIMG,
		},
	},
	{
		id: 3,
		nombre: 'Gifs App',
		githubURL: 'https://github.com/Marc1515/gifs-app',
		pageURL: 'https://gifs.marcespana.com',
		img: gifsAppImg,
		techBuild: {
			angularSVG: angularSvgIMG,
			htmlSVG: htmlSvgIMG,
			cssSVG: cssSvgIMG,
			typeScriptSvg: typeScriptSvgIMG,
		},
	},
	{
		id: 4,
		nombre: 'Learn English App',
		githubURL: 'https://github.com/Marc1515/learn-english',
		pageURL: 'https://learning.marcespana.com',
		img: learrnAppImg,
		techBuild: {
			htmlSVG: htmlSvgIMG,
			cssSVG: cssSvgIMG,
			reactSVG: reactSvgIMG,
			javaScriptSvg: javaScriptSvgIMG,
		},
	},
	{
		id: 5,
		nombre: 'Trailers App',
		githubURL: 'https://github.com/Marc1515/movieapp-youtube',
		pageURL: 'https://trailers.marcespana.com',
		img: trailersAppImg,
		techBuild: {
			htmlSVG: htmlSvgIMG,
			cssSVG: cssSvgIMG,
			reactSVG: reactSvgIMG,
			javaScriptSvg: javaScriptSvgIMG,
		},
	},
	{
		id: 6,
		nombre: 'Weather App',
		githubURL: 'https://github.com/Marc1515/openweather',
		pageURL: 'https://theweather.marcespana.com',
		img: weatherAppImg,
		techBuild: {
			htmlSVG: htmlSvgIMG,
			cssSVG: cssSvgIMG,
			reactSVG: reactSvgIMG,
			javaScriptSvg: javaScriptSvgIMG,
		},
	},
];

export default PortfolioQuestions;
