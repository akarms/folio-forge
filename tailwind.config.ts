/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */

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
  		},
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 
                0px 1px 0px 0px rgba(25,28,33,0.02), 
                0px 0px 0px 1px rgba(25,28,33,0.08)`,
        "hover-div": `0px 4px 6px rgba(0, 0, 0, 0.1), 
                      0px 2px 4px rgba(0, 0, 0, 0.6)`, // Optional shadow for hover
      },
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

    function addVariablesForColors({ addBase, theme }: { addBase: (styles: Record<string, any>) => void, theme: (path: string) => string }) {
      addBase({
        ":root": {
          "--blue-500": theme("colors.blue.500"),
        },
      });
    },



  ],
} satisfies Config;
