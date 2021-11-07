// import React, { useState } from 'react'
import { createTheme } from '@material-ui/core/styles'
// import { purple, pink } from '@material-ui/core/colors'

// const theme = createTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#fefefe'
//     },
//     secondary: purple
//   },
//   typography: {
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium:600,
//     fontWeightBold: 700,
//   }
// })

// const theme = createTheme({
//   palette: {
//     type: 'dark',
//   },
//   typography: {
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium:600,
//     fontWeightBold: 700,
//   }
// })

// export default theme

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#44475a',
    },
    secondary: {
      main: '#ff79c6',
    },
    background: {
      default: '#282a36',
      paper: '#44475a',
    },
    text: {
      primary: '#f8f8f2',
    },
    error: {
      main: '#ff5555',
    },
    warning: {
      main: '#ffb86c',
    },
    info: {
      main: '#8be9fd',
    },
    success: {
      main: '#50fa7b',
    },
    page: {
      width: '100%',
      // padding: theme.spacing(3),
      // spacing: 1,
    },
    paper: {
      background: '#44475a',
    }
    
  
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },

})

export default theme
