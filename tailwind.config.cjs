/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: '#3438CD',
            grey: '#EFEFEF',
            white: '#FFFFFF',
            lightDark: '#6C757D',
            matteBlack: '#202020',
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            gridTemplateRows: {
                layout: '1fr',
            },
            gridTemplateColumns: {
                layout: '200px 1fr',
            },
            boxShadow: {
                image: '3px 3px 5px 0px rgba(0,0,0,0.15);',
                outlineBtn: ' 0px 0px 0px 3px rgba(41,132,248,0.2);',
            },
        },
        screens: {
            sm: '640px',
            md: '1024px',
            lg: '1280px',
            xl: '1600px',
        },
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
            h3: '2rem',
            h2: '2.25rem',
            h1: '2.5rem',
        },
    },
    plugins: [],
};
