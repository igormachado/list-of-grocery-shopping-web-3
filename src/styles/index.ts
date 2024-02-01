import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      purpleLight: '#A881E6',
      purple: '#7450AC',
      purpleDark: '#523480',

      gray100: '#FBF9FE',
      gray200: '#AFABB6',
      gray300: '#252529',
      gray400: '#17171A',
      gray500: '#111112',
      gray600: '#0C0C0D',

      successLight: '#4E995E',
      success: '#2F723D',

      pink: '#DB5BBF',
      pinkDark: '#251622',

      orange: '#E07B67',
      orangeDark: '#261A17',

      yellow: '#BB9F3A',
      yellowDark: '#211E12',

      green: '#8CAD51',
      greenDark: '#1C2015',

      blue: '#7B94CB',
      blueDark: '#1A1D23',
    },

    fontSizes: {
      xl: '1.5rem',
      lg: '0.8125rem',
      md: '0.75rem',
    },
  },
})
