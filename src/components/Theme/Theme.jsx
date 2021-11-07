import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { purple, pink } from '@material-ui/core/colors'

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

const theme = createTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium:600,
    fontWeightBold: 700,
  }
})

export default theme
