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
                secondary: '#232323'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}