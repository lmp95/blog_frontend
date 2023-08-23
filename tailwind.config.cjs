/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            gridTemplateRows: {
                layout: '1fr',
            },
            gridTemplateColumns: {
                layout: '75px 1fr',
            },
            boxShadow: {
                image: '3px 3px 5px 0px rgba(0,0,0,0.15);',
            },
        },
        screens: {
            sm: '640px',
            md: '1024px',
            lg: '1280px',
            xl: '1600px',
        },
    },
    plugins: [],
};
