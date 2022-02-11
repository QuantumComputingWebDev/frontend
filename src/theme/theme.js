import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';
import {responsiveFontSizes} from "@mui/material";

const rawTheme = createTheme({
    palette: {
        primary: {
            light: '#69696a',
            main: '#28282a',
            dark: '#1e1e1f',
        },
        secondary: {
            light: '#fff5f8',
            main: '#ff3366',
            dark: '#e62958',
        },
        warning: {
            main: '#ffc071',
            dark: '#ffb25e',
        },
        error: {
            light: '#ad0f0f',
            main: '#ad0f0f',
            dark: '#ad0f0f',
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        fontFamily: "'Bahij', sans-serif",
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
    },
});



const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Bahij', sans-serif",
    // textTransform: 'uppercase',
};

const addBacktheme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200],
        },
    }
};

const theme = responsiveFontSizes(addBacktheme)

export default theme;