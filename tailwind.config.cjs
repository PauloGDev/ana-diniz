module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: 'var(--color-primary)',
        gold: 'var(--color-secondary)',
        paper: 'var(--color-background)',
        stone: 'var(--color-surface-secondary)',
        ink: 'var(--color-text)',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Montserrat', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
