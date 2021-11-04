import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import MusicTable from './components/MusicTable'
import AddSong from './components/AddSong'
import Layout from './components/Layout'


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

// const theme = createTheme({
//   palette: {
//     type: 'dark',
//   },
// })



export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <AddSong />
            </Route>
            <Route exact path='/music'>
              <MusicTable />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
