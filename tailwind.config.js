module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            outline: {
                blue: ['2px solid #1189B8'],
            },
            colors: {
                primary: '#1189B8',
                primaryGreen: '#187C79',
                secondary: '#232323 ',
                techColor: '#2D8DFE',
                designColor: '#E72634',
                consultantColor: '#B426DC',
                farmColor: '#55BEDC'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}