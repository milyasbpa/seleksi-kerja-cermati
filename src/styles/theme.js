import { createMuiTheme } from '@material-ui/core/styles';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_FONT } from './';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'initial'
      },
      containedPrimary: {
        color: 'white'
      }
    },
    MuiPaper: {
      root: {
        padding: '0.5rem'
      }
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 960,
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    color: COLOR_FONT
  },
  palette: {
    primary: {
      main: COLOR_PRIMARY
    },
    secondary: {
      main: COLOR_SECONDARY
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
