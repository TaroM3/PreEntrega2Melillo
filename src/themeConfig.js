import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
    
    palette: {
        primary: {
            // main: '#dbdbdb'
            main: '#ffffff'
            // main: '--primary'
        },
        secondary: {
            main: '#080708'
        },
        accent: {
            // main: '#9e0031'
            main: '#E50914'
        },
        detail: {
            // main: '#086375'
            main: '#E50914'
        }
    },  
    spacing: (factor) => `${0.25 * factor}rem`
});

export const customThemeDark = createTheme({
    palette: {
        primary: {
            main: '#080708'
        },
        secondary: {
            // main: '#dbdbdb'
            main: '#ffffff'
        },
        accent: {
            main: '#086375'
        },
        detail: {
            main: '#E50914'
        }
    },
    spacing: (factor) => `${0.25 * factor}rem`
});


//     --primary:#dbdbdb;
//     --secondary:#080708;
//     --grey:#086375;
//     --accent:#9e0031;

// --text-xxl: 4.7em;
//     --text-xl: 3.5em;
//     --text-xl2: 3.1em;
//     --text-lg: 1.9em;
//     --text-sm: 1.6em;
//     --text-xs: 1.3em;

//     /* Spacings */
//     --space-xxl: 12rem;
//     --space-xl: 8rem;
//     --space-lg: 5rem;
//     --space-md: 3.2rem;
//     --space-sm: 1.6rem;
//     --space-xs: 0.8rem;  