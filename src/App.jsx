import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import MusicTable from './components/MusicTable'
import AddSong from './components/AddSong'
import Layout from './components/Layout'

const lightTheme = createTheme({
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

// const darkTheme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#55555'
//     },
//     secondary: pink
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
//     primary: {
//       main: '#bd93f9',
//       contrastText: 'rgb(132, 102, 174)',
//     },
//     appbar: {
//       background: '#44475a'
//     },
//     secondary: {
//       main: '#8be9fd',
//       contrastText: '#44475a',
//     },
//     background: {
//       default: '#282a36',
//       paper: '#44475a',
//     },
//     page: {
//       background: '#282a36',
//       width: '100%',
//     },
//     text: {
//       primary: '#f8f8f2',
//     },
//     error: {
//       main: '#ff5555',
//     },
//     warning: {
//       main: '#ffb86c',
//     },
//     info: {
//       main: '#ff79c6',
//     },
//     success: {
//       main: '#50fa7b',
//     },
//     divider: '#6272a4',
//   },
//   props: {
//     MuiAppBar: {
//       color: 'default',
//     },
//   },
//   overrides: {
//     MuiButton: {
//       root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//       },
//     },
//   },
// })

export default function App() {
 
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Layout >
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
