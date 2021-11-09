import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import MusicTable from './pages/MusicTable'
import AddSong from './pages/AddSong'
import Layout from './components/Layout'
import theme from './components/Theme/Theme';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
