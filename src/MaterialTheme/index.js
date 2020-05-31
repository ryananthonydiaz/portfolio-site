import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#a43125',
			dark: '#2c3e50',
			text: {
				primary: '#dc6f64',
				primarymediumEmphasis: 'rgba(0,0,0,0.6)',
				secondary: 'rgba(255,255, 255, 1)',
				secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)',
			},
		},
		background: {
			default: '#501812',
		},
		typography: {
			subtitle1: { fontWeight: 100 },
		},
	},
});
