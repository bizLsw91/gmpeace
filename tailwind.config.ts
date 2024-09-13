import { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

import { shadcnPlugin } from "./src/lib/shadcn-plugin";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [tailwindAnimate, shadcnPlugin],
  darkMode: "class",
  theme:{
  	extend: {
		screens:{
			// 기본 브레이크포인트
			'xs': '480px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',

			// max- 브레이크포인트
			'max-xs': { 'max': '479px' },
			'max-sm': { 'max': '639px' },
			'max-md': { 'max': '767px' },
			'max-lg': { 'max': '1023px' },
			'max-xl': { 'max': '1279px' },
			'max-2xl': { 'max': '1535px' },
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			"antd-form": "#d9d9d9",
			brand: "#63489a",
			turquoise: "#1abc9c",
			greensea: "#16a085",
			emerald: "#2ecc71",
			nephritis: "#27ae60",
			peterriver: "#3498db",
			belizehole: "#2980b9",
			amethyst: "#9b59b6",
			wisteria: "#8e44ad",
			wetasphalt: "#34495e",
			midnightblue: "#2c3e50",
			sunflower: "#f1c40f",
			orange: "#f39c12",
			carrot: "#e67e22",
			pumpkin: "#d35400",
			alizarin: "#e74c3c",
			pomegranate: "#c0392b",
			clouds: "#ecf0f1",
			silver: "#bdc3c7",
			concrete: "#95a5a6",
			asbestos: "#7f8c8d",
  		}
  	}
  }
} satisfies Config;


export default config;