import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
        // Brand colors (semantic naming with RGB values for opacity support)
        brand: {
          // Using RGB values directly enables opacity modifiers
          primary: 'rgb(0 29 108)', // --ibm-deep-blue
          'primary-light': 'rgb(5 48 173)', // --ibm-blue
          secondary: 'rgb(64 120 169)', // --ibm-mid-blue
          neutral: 'rgb(221 225 230)', // --ibm-cool-gray
        },
        // Keep for backward compatibility
        ibm: {
          blue: 'var(--brand-primary-light)',
          gray: 'var(--brand-neutral)',
          deepBlue: 'var(--brand-primary)',
          midBlue: 'var(--brand-secondary)',
        },
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['IBM Plex Sans', 'sans-serif'],
        condensed: ['IBM Plex Sans Condensed', 'sans-serif'],
        heading: ['IBM Plex Sans', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: '600', // SemiBold
                marginBottom: '0.25em',
                fontFamily: 'IBM Plex Sans, sans-serif',
              },
              h2: {
                fontWeight: '600', // SemiBold
                fontFamily: 'IBM Plex Sans, sans-serif',
              },
              h3: {
                fontWeight: '600', // SemiBold
                fontFamily: 'IBM Plex Sans, sans-serif',
              },
              h4: {
                fontWeight: '600', // SemiBold
                fontFamily: 'IBM Plex Sans, sans-serif',
              },
              h5: {
                fontWeight: '600', // SemiBold
                fontFamily: 'IBM Plex Sans, sans-serif',
              },
              h6: {
                fontWeight: '600', // SemiBold
                fontFamily: 'IBM Plex Sans, sans-serif',
              },
              p: {
                fontFamily: 'IBM Plex Sans Condensed, sans-serif',
              },
              li: {
                fontFamily: 'IBM Plex Sans Condensed, sans-serif',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
              },
              '.subtitle': {
                fontFamily: 'IBM Plex Sans Condensed, sans-serif',
                fontWeight: '500', // Medium
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
