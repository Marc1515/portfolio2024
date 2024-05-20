import { createTheme } from '@mui/material/styles';
import './../variables/_colors.scss';
import './../variables/_screens.scss';

const getCssColor = (color) =>
	getComputedStyle(document.documentElement).getPropertyValue(color);

// Definición de breakpoints
const breakpoints = {
	values: {
		smallPhones: 576,
		largePhonesTablets: 767,
		tabletsSmallScreens: 991,
		screens: 1200,
	},
};

const theme = createTheme({
	breakpoints,
	components: {
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					color: getCssColor('--primary-background-color'),

					fontSize: '1.5rem',
					height: '3rem',
					width: '3rem',
					borderRadius: '50%',

					[`@media (min-width:${breakpoints.values.largePhonesTablets}px)`]: {
						fontSize: '2rem',
						height: '3.5rem',
						minWidth: '3.5rem',
					},

					[`@media (min-width:${breakpoints.values.tabletsSmallScreens}px)`]: {
						fontSize: '2.5rem',
						height: '4rem',
						minWidth: '4rem',
					},

					[`@media (min-width:${breakpoints.values.screens}px)`]: {
						fontSize: '1.5rem',
						height: '3rem',
						minWidth: '3rem',
					},
				},

				page: {
					'&.Mui-selected': {
						backgroundColor: getCssColor('--accent-color'),
						color: getCssColor('--quaternary-background-color'),
					},
					'&.Mui-selected:hover': {
						backgroundColor: getCssColor('--primary-background-color'),
					},
				},

				icon: {
					fontSize: '2rem',

					[`@media (min-width:${breakpoints.values.largePhonesTablets}px)`]: {
						fontSize: '2.5rem',
					},

					[`@media (min-width:${breakpoints.values.tabletsSmallScreens}px)`]: {
						fontSize: '3rem',
					},

					[`@media (min-width:${breakpoints.values.screens}px)`]: {
						fontSize: '2rem',
					},
				},
			},
		},
	},
});

export default theme;
