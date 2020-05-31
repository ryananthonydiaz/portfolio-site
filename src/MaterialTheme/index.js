import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
	palette: {
		// TODO: conditionally change light and dark mode
		// type: 'dark',
		primary: {
			main: '#2c3e50',
			text: {
				primary: '#dc6f64',
				primarymediumEmphasis: 'rgba(0,0,0,0.6)',
				secondary: 'rgba(255,255, 255, 1)',
				secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)',
			},
		},
		background: {

		},
		typography: {
			h1: {
				fontWeight: 100,
			},
			subtitle1: { fontWeight: 100 },
		},
	},
});
