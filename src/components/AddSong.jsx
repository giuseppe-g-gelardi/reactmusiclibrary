import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
})


export default function AddSong() {


  const [title, setTitle] = useState('')
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [redirect, setRedirect] = useState(false)
  const classes = useStyles()

  const newSongUri = 'http://localhost:8000/songs'

  const handleSubmit = async e => {
    let response;
    e.preventDefault()
    let song = {
      title: title,
      album: album,
      artist: artist,
      genre: genre,
      releaseDate: releaseDate
    }
      try {
        // TODO properly implement redirect 
        response = await axios.post(newSongUri, song)
        .then(() => setRedirect(true))
      } catch (error) {
        console.log(error)
      }
      console.log(response)
      if (redirect) {
        return <Redirect to='/music' />
      }
    }

  return (

    <Container>
      <Typography 
          className={classes.field}
          variant='h6'
          color='textSecondary'
          component='h2'
          gutterBottom
        >
          Add a new song!
        </Typography>

        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            color='secondary'
            style={{marginBottom: 20}}
            onChange={e => setTitle(e.target.value)} 
            className={classes.field}
            label='Song title'
            variant='outlined'
            fullWidth
            required
          />

          <TextField
            color='secondary'
            style={{marginBottom: 20}}
            onChange={e => setArtist(e.target.value)} 
            className={classes.field}
            label='Artist Name'
            variant='outlined'
            fullWidth
            required
          />    

          <TextField
            color='secondary'
            style={{marginBottom: 20}}
            onChange={e => setAlbum(e.target.value)} 
            className={classes.field}
            label='Album Title'
            variant='outlined'
            fullWidth
            required
          /> 

          <TextField
            color='secondary'
            style={{marginBottom: 20}}
            onChange={e => setGenre(e.target.value)} 
            className={classes.field}
            label='Genre'
            variant='outlined'
            fullWidth
            required
          />  

          <TextField
            color='secondary'
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
            color='secondary'
            variant='contained'
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
    </Container>

  )
}
