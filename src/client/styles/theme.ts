import { createTheme } from '@mui/material/styles';
import { red, blue, green, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: { main: blue[400] },
    secondary: { main: pink.A200 },
    text: { primary: '#ddd' },
    background: { default: '#181818', paper: '#aaa' },
    error: { main: red.A700 },
    success: { main: green.A700 },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
