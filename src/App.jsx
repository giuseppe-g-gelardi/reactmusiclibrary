import React from 'react'
import { Routes, Route } from 'react-router-dom/'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import MusicTable from './pages/MusicTable'
import Layout from './components/Layout'
import theme from './components/Theme/Theme';

export default function App() {

  // TODO add light/dark theme switch

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
          <Layout>
            <Routes>
              <Route path='/' element={<MusicTable />} />
            </Routes>
          </Layout>
    </ThemeProvider>
  )
}
