import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom/'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import MusicTable from './pages/MusicTable'
import Layout from './components/Layout'
import { lightTheme, darkTheme } from './components/Theme/Theme'

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const theme = (darkMode ? darkTheme : lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Layout check={darkMode} change={() => setDarkMode(!darkMode)}>
          <Routes>
            <Route path='/' element={<MusicTable />} />
          </Routes>
        </Layout>
    </ThemeProvider>
  )
}
