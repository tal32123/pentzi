import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E91E63', // A warm, piggy-pink
      dark: '#C2185B', // Darker pink
    },
    secondary: {
      main: '#00796B', // Deep teal
      light: '#B2DFDB', // Lighter teal
    },
    background: {
      default: '#FAFAFA', // Light grey or off-white
      paper: '#FFFBF8', // Slight warm tint
    },
    error: {
      main: '#F44336', // Standard red
    },
    warning: {
      main: '#FF9800', // Amber
    },
    success: {
      main: '#4CAF50', // Comforting green
    },
    // Other colors like text can be adjusted as needed
  },
  // Other theme customizations
});

export default theme;
