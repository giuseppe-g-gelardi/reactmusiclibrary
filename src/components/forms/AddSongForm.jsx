import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'

  const useStyles = makeStyles({
    field: {
      marginTop: 10,
      marginBottom: 10,
      display: 'block',
      
    
    },
    text: {
      marginTop: 10,
      marginBottom: 10,
      display: 'block',
      // color: '#bd93f9',
    },
  })

export default function AddSongForm() {

  const [title, setTitle] = useState('')
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const classes = useStyles()


  // live json server
  const api = 'https://my-json-server.typicode.com/giuseppe-g-gelardi/musiclibrary_dbjson/songs'

  // json server
  // const api = 'http://localhost:8000/songs'

  // rest api
  // const api = 'http://localhost:3800/api/songs'

  const handleSubmit = async e => {
    e.preventDefault()
    let song = {
      title: title,
      album: album,
      artist: artist,
      genre: genre,
      releaseDate: releaseDate
    }
    try {
      await axios.post(api, song)
      .then(() => reloadPage())
      
    } catch (error) {
      console.log(error)
    }
  }
    const reloadPage = () => {
      window.location.reload()
    }
  
  return (
    <Container>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            style={{marginBottom: 20}}
            onChange={e => setTitle(e.target.value)} 
            className={classes.field}
            label='Song title'
            variant='outlined'
            fullWidth
            required
          />

          <TextField
            style={{marginBottom: 20}}
            onChange={e => setArtist(e.target.value)} 
            className={classes.field}
            label='Artist Name'
            variant='outlined'
            fullWidth
            required
          />    

          <TextField
            style={{marginBottom: 20}}
            onChange={e => setAlbum(e.target.value)} 
            className={classes.field}
            label='Album Title'
            variant='outlined'
            fullWidth
            required
          /> 

          <TextField
            style={{marginBottom: 20}}
            onChange={e => setGenre(e.target.value)} 
            className={classes.field}
            label='Genre'
            variant='outlined'
            fullWidth
            required
          />  

          <TextField
            style={{marginBottom: 20}}
            onChange={e => setReleaseDate(e.target.value)} 
            className={classes.field}
            label='Release Date'
            variant='outlined'
            fullWidth
            required
          />      

          <Button
            type='submit'
            color='primary'
            variant='contained'
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit song!
          </Button>
        </form>
    </Container>
  )
}
