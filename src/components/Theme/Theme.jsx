import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { purple, pink } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium:600,
    fontWeightBold: 700,
  }
})

const themeDark = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#555555'
    },
    secondary: pink
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium:600,
    fontWeightBold: 700,
  }
})

const Theme = (props) => {
  const { children, darkMode } = props
  const defaultTheme = darkMode ? themeDark : theme;
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useState(false)
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    )
  }
}
