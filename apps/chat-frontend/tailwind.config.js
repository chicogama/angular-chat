const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { default: daisyui } = require('daisyui');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: 'Inter var, ui-sans-serif, system-ui',
      serif: 'Inter var, ui-sans-serif, system-ui',
    },
    fontSize: {
      sm: '0.875rem',
      base: '1.3rem',
      xl: '1.55rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
    daisyui: {
      themes: [
        {
          fantasy: {
            primary: '#000ff',

            'primary-content': 'white',

            secondary: '#f6f6f6',

            neutral: '#e8e8e8',

            base: 'white',

            info: '#0000ff',

            success: '#4ade80',

            warning: '#fef08a',

            error: '#f43f5e',
          },
        },
      ],
      themes: true,
      base: true,
      styled: true,
      utils: true,
      prefix: '',
      logs: true,
      themeRoot: ':root',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
