import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import MusicCard from '../components/MusicCard'
import EditSong from './EditSong'
import { Routes, Route } from 'react-router-dom'
import { AddCircleOutlineOutlined } from '@material-ui/icons'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    background: '#32424A',
  },
})

export default function MusicTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [songList, setSongList] = useState([])
  const classes = useStyles()
  const api = 'http://localhost:3800/api/songs'

  useEffect(() => {
    getSongs()
  }, [])

  const getSongs = async () => {
    try {
      await axios.get(api).then(
        response => {
          setSongList(response.data)
        }, err => {console.log(err)})
    } catch (e) {console.log(e)}
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3800/api/songs/${id}`)
      getSongs()
    } catch (error) {
      console.log(error)
    }
    const newSongs = songList.filter(song => song.id !== id)
    setSongList(newSongs)
  }



  return (
    <Container>
        <Container className={classes.field}>
        <TextField 
          InputLabelProps={{style: {color: '#fff'}}}
          label='Filter songs...'
          className={classes.text}
          variant='outlined'
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
      </Container>
      <Container className={classes.field}>


        {/* TODO put to the right of filter textfield */}
        <Button
            // type='submit'
            color='secondary'
            variant='contained'
            endIcon={<AddCircleOutlineOutlined />}
          >
            Add Song
          
        </Button>

        


      </Container>
        <Grid container spacing={3}>
          {songList
           // eslint-disable-next-line array-callback-return
          .filter((val, i) => {
            let searchString = ''
            for (let value of Object.entries(val)) {
              searchString += `${value}\t`
            }
            if (searchTerm === '') {
              return val
            } else if (
              searchString
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) {
              return val
            }}).map((song, i)  => ( 
              
            <Grid item key={song.id} sx={12} md={6} lg={4}> 
              <MusicCard song={song} handleDelete={handleDelete} />
              <Routes>
                {/* <Route path={`/music/edit/${song.id}`} element={<EditSong song={song} />} /> */}
                <Route path='/music/edit/' element={<EditSong song={song} />} />
              </Routes>
            </Grid>
            
          ))}
            
        </Grid>
    </Container>
  )
}
  

