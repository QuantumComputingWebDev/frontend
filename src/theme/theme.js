import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';
import {responsiveFontSizes} from "@mui/material";

const rawTheme = createTheme({
    palette: {
        primary: {
            light: '#d9d9ea',
            main: '#7a7ad5',
            dark: '#20205e',
        },
        secondary: {
            light: '#F28C77',
            main: '#F6A167',
            dark: '#f6c467',
        },
        warning: {
            main: '#ff8b71',
            dark: '#ef2e2e',
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
        allVariants: {
            color: "white"
        }
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
            placeholder: "#c9b5b5",
        },
    },
    // typography: {
    //     p: {
    //         color: "#c9b5b5"
    //     },
    //     h1: {
    //         color: "#c9b5b5"
    //     },
    //     h2: {
    //         color: "#c9b5b5"
    //     },
    //     h3: {
    //         color: "#c9b5b5"
    //     },
    //     h4: {
    //         color: "#c9b5b5"
    //     },
    //     h5: {
    //         color: "#c9b5b5"
    //     },
    //     h6: {
    //         color: "#c9b5b5"
    //     },
    // },
};

const theme = responsiveFontSizes(addBacktheme)

export default theme;