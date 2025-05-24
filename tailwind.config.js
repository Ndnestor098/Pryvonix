import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
            },
            animation: {
                float: 'float 2s ease-in-out infinite',
            },
            colors: {
                'morado-50': '#9083c5',
                'morado-100': '#e2ddff',
                'morado-200': '#534588',
                'morado-400': '#694fcd',
                'morado-500': '#4d407e',
                'morado-600': '#3e3269',
            },
        },
    },

    plugins: [forms],
};
