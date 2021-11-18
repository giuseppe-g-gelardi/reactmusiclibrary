import { createTheme } from '@material-ui/core/styles'

const baseTheme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'light'
  },  
  
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark'
  },
  components: {
    MuiTextField: {
      color: '#fff',
      inputLabelProps: {
        color: '#fff'
      }
    }, 
  }
})

export { lightTheme, darkTheme }

// const materialTheme = createTheme({
//   ...baseTheme,
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#c792ea',
//     },
//     secondary: {
//       main: '#314549',
//     },
//     background: {
//       default: '#263238',
//       paper: '#32424A',
//     },
//     text: {
//       primary: '#ffffff',
//       secondary: '#ffffff'
//     },
//     info: {
//       main: '#2196f3',
//     },
//     multilineColor: {
//       color: '#fff'
//     }
//   },
//   props: {
//     MuiAppBar: {
//       color: 'secondary',
//     },
//   },

// })
