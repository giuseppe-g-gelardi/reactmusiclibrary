import React from 'react'
import { Routes, Route } from 'react-router-dom/'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import MusicTable from './pages/MusicTable'
import AddSong from './pages/AddSong'
import Layout from './components/Layout'
import theme from './components/Theme/Theme';
import EditSong from './pages/EditSong';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
          <Layout>
            <Routes>
              <Route path='/' element={<AddSong />} />
              <Route path='/music/*' element={<MusicTable />} />
              <Route path='/music/edit/' element={<EditSong />} />
            </Routes>
          </Layout>
    </ThemeProvider>
  )
}
