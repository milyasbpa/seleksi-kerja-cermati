import { createMuiTheme } from '@material-ui/core/styles';

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
    fontFamily: ['Roboto','Helvetica','Arial', 'sans-serif'].join(','),
  },
});

export default theme;
