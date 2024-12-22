import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';


export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(function ({ addBase }) {
      addBase({
        /* Global scrollbar styles */
        '::-webkit-scrollbar': {
          width: '2px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: 'black',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#545859',
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '6c63ff',
        },
      });
    }), 
  ],
} satisfies Config;
