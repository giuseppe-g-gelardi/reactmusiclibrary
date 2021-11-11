import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'
import UpdateIcon from '@material-ui/icons/Update';


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

export default function EditSong({ songid }) {

  const [title, setTitle] = useState('')
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [redirect, setRedirect] = useState(false)
  const classes = useStyles()
  const navigate = useNavigate()

  const api = `http://localhost:3800/api/songs/${songid}`

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


  useEffect(() => {
    console.log(songid)
  }, [songid])


  const handleUpdate = async (e) => {
    // let response;
    e.preventDefault()
    let song = {
      title: title,
      album: album,
      artist: artist,
      genre: genre,
      releaseDate: releaseDate
    }
    try {
      await axios.put(api, song)
      .then(() => setRedirect(true))
    } catch (error) {
      console.log(error)
    }
  }

  if (redirect) {
    navigate('/music')
  }
  
  return (

    <Container>
      <Typography 
          className={classes.text}
          variant='h6'
          component='h2'
          gutterBottom
        >
          Edit song...<UpdateIcon />
        </Typography>

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

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import Container from '@material-ui/core/Container'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
// import { makeStyles } from '@material-ui/core/styles'
// import TextField from '@mui/material/TextField'
// import UpdateIcon from '@material-ui/icons/Update';


//   const useStyles = makeStyles({
//     field: {
//       marginTop: 20,
//       marginBottom: 20,
//       display: 'block',
//       background: '#32424A',
//       input: {
//         "&::placeholder": {
//           color: 'red'
//         }
//       }
//     },
//     text: {
//       marginTop: 20,
//       marginBottom: 20,
//       display: 'block',
//       color: '#bd93f9',
//     },
//   })

// export default function EditSong({ handleUpdate, song }) {

//   const [title, setTitle] = useState('')
//   const [album, setAlbum] = useState('')
//   const [artist, setArtist] = useState('')
//   const [genre, setGenre] = useState('')
//   const [releaseDate, setReleaseDate] = useState('')
//   const [redirect, setRedirect] = useState(false)
//   const classes = useStyles()
//   const [songList, setSongList] = useState([])
//   const navigate = useNavigate()

//   const api = 'http://localhost:3800/api/songs/'

//   useEffect(() => {
//     getSongs()
//   }, [])

//   const getSongs = async () => {
//     try {
//       await axios.get(api).then(
//         response => {
//           setSongList(response.data)
//           console.log(songList)
//         }, err => {console.log(err)})
//     } catch (e) {console.log(e)}
//   }



//   const handleSubmit = async (e) => {
//     // let response;
//     e.preventDefault()
//     let song = {
//       title: title,
//       album: album,
//       artist: artist,
//       genre: genre,
//       releaseDate: releaseDate
//     }
//     try {
//       await axios.put(api, song)
//       .then(() => setRedirect(true))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   if (redirect) {
//     // return <Redirect to='/music' />
//     navigate('/music')
//   }
  
//   return (

//     <Container>
//       <Typography 
//           className={classes.text}
//           variant='h6'
//           component='h2'
//           gutterBottom
//         >
//           Edit song...<UpdateIcon />
//         </Typography>

//         <form noValidate autoComplete='off' onSubmit={handleUpdate}>
//           <TextField
//             InputLabelProps={{style: {color: '#fff'}}}
//             style={{marginBottom: 20}}
//             onChange={e => setTitle(e.target.value)} 
//             className={classes.field}
//             label='Song title'
//             placeholder={title}
//             variant='outlined'
//             fullWidth
//             required
//           />

//           <TextField
//             InputLabelProps={{style: {color: '#fff'}}}
//             style={{marginBottom: 20}}
//             onChange={e => setArtist(e.target.value)} 
//             className={classes.field}
//             label='Artist Name'
//             variant='outlined'
//             fullWidth
//             required
//           />    

//           <TextField
//             InputLabelProps={{style: {color: '#fff'}}}
//             style={{marginBottom: 20}}
//             onChange={e => setAlbum(e.target.value)} 
//             className={classes.field}
//             label='Album Title'
//             variant='outlined'
//             fullWidth
//             required
//           /> 

//           <TextField
//             InputLabelProps={{style: {color: '#fff'}}}
//             style={{marginBottom: 20}}
//             onChange={e => setGenre(e.target.value)} 
//             className={classes.field}
//             label='Genre'
//             variant='outlined'
//             fullWidth
//             required
//           />  

//           <TextField
//             InputLabelProps={{style: {color: '#fff'}}}
//             style={{marginBottom: 20}}
//             onChange={e => setReleaseDate(e.target.value)} 
//             className={classes.field}
//             label='Release Date'
//             variant='outlined'
//             fullWidth
//             required
//           />      

//           <Button
//             type='submit'
//             color='secondary'
//             variant='contained'
//             endIcon={<KeyboardArrowRightIcon />}
//           >
//             Submit
//           </Button>
//         </form>
//     </Container>
//   )
// }
