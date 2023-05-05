import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const newFont = "'Rajdhani', sans-serif;"

const theme = createTheme({
  palette: {
    primary: {
      main: '#306359',
    },
    secondary: {
      main: '#7ABD9B',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: newFont,
    button: {
      fontSize: '0.8rem',
    },
    subtitle2: {
      color: '#D1EAC1',
      fontSize: 15,
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: 14,
    },
    body1: {
      fontSize: 15,
      fontWeight: 300,
    },
  },
})

export default theme

// theme = responsiveFontSizes(theme)

// THEME VARIABLES
// .palette
// .typography
// .spacing
// .breakpoints
// .zIndex
// .transitions
// .components
