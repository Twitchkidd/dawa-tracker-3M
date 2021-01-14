import Typography from 'typography';
import KirkhamTheme from 'typography-theme-kirkham';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import { maroon } from './Colors';

KirkhamTheme.overrideThemeStyles = ({ rhythm }) => ({
	a: {
		color: maroon,
		backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${maroon} 1px, ${maroon} 2px, rgba(0, 0, 0, 0) 2px)`,
	},
	blockquote: {
		borderLeft: `${rhythm(6 / 16)} solid ${maroon}`,
	},
	[MOBILE_MEDIA_QUERY]: {
		blockquote: {
			borderLeft: `${rhythm(3 / 16)} solid ${maroon}`,
		},
	},
});
KirkhamTheme.scaleRatio = 5 / 2;

delete KirkhamTheme.googleFonts;

const typography = new Typography(KirkhamTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
	typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
