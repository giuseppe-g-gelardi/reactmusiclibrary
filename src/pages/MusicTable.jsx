import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import MusicCard from '../components/MusicCard'

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
  // const dbUri = 'http://localhost:8000/songs'
  const api = 'http://localhost:3800/api/songs'

  useEffect(() => {
    getSongs()
  }, [])

  const getSongs = async () => {
    try {
      // await axios.get(`${dbUri}`).then(
      await axios.get(api).then(
        response => {
          setSongList(response.data)
        }, err => {console.log(err)})
    } catch (e) {console.log(e)}
  }

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`http://localhost:8000/songs/${id}`)
      await axios.delete(`api${id}`)
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
            }}).map((song, i) => (
            <Grid item key={song.id} sx={12} md={6} lg={4}> 
              <MusicCard song={song} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
  )
}

  // inputfield: {
  //   background: "#44475a"
  // }
