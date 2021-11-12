import React, { useState } from 'react'
import axios from 'axios'
// import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'
// import UpdateIcon from '@material-ui/icons/Update';


  const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
      background: '#32424A',
      input: {
        "&::placeholder": {
          color: 'red'
        }
      }
    },
    text: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
      color: '#bd93f9',
    },
  })

export default function EditSong(props) {

  const { song } = props



  const [title, setTitle] = useState('')
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const classes = useStyles()

  const api = ("http://localhost:3800/api/songs/" + song)
  // http://localhost:3800/api/songs/{id}



  // {
  //   "title": "asdf",
  //   "album": "asdf",
  //   "artist": "asdf",
  //   "genre": "asdf",
  //   "releaseDate": "tomorrow"
  // }

// TODO
// i think i need to import get songs
// or a song list in here to pass the id into the api link
// since i cant pass the songid in as props

// TODO
// also learn how to use context. i think it might help in this application

// TODO
// ! test with hardcoded songid first!

// TODO
// * hardcoded put makes id a string. need fix


  const handleUpdate = async (e) => {
    e.preventDevault()
    // let response;
    let song = {
      title: title,
      album: album,
      artist: artist,
      genre: genre,
      releaseDate: releaseDate
    }
    try {
      await axios.put(api, song)
      .then(() => reloadPage())
    } catch (error) {
      console.log(error)
    }
  }

   // function to reload the page
   const reloadPage = () => {
    window.location.reload()
  }
  
  return (

    <Container>
      {/* <Typography 
          className={classes.text}
          variant='h6'
          component='h2'
          gutterBottom
        >
          Edit song...<UpdateIcon />
        </Typography> */}
        <button onClick={() => console.log(song)}>log</button>

        <form noValidate autoComplete='off' onSubmit={handleUpdate}>
          <TextField
            InputLabelProps={{style: {color: '#fff'}}}
            style={{marginBottom: 20}}
            onChange={e => setTitle(e.target.value)} 
            className={classes.field}
            label='Song title'
            placeholder={title}
            variant='outlined'
            fullWidth
            required
          />

          <TextField
            InputLabelProps={{style: {color: '#fff'}}}
            style={{marginBottom: 20}}
            onChange={e => setArtist(e.target.value)} 
            className={classes.field}
            label='Artist Name'
            variant='outlined'
            fullWidth
            required
          />    

          <TextField
            InputLabelProps={{style: {color: '#fff'}}}
            style={{marginBottom: 20}}
            onChange={e => setAlbum(e.target.value)} 
            className={classes.field}
            label='Album Title'
            variant='outlined'
            fullWidth
            required
          /> 

          <TextField
            InputLabelProps={{style: {color: '#fff'}}}
            style={{marginBottom: 20}}
            onChange={e => setGenre(e.target.value)} 
            className={classes.field}
            label='Genre'
            variant='outlined'
            fullWidth
            required
          />  

          <TextField
            InputLabelProps={{style: {color: '#fff'}}}
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
